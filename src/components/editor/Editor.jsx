import React, {Fragment, useEffect, useRef, useState} from 'react'
import Konva, {Transformer} from 'konva';
import {Stage, Layer, Image, Rect} from 'react-konva';
import useImage from 'use-image';

import t1 from '../../resources/t-1.png';
import './Editor.scss'

const URLImage = ({image, isSelected, onSelect, onChange}) => {
    const [img] = useImage(image.src);

    const shapeRef = useRef();
    const trRef = useRef();

    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <Fragment>
        <Image
            id={image.id}
            image={img}
            x={image.x}
            y={image.y}
            height={image.height}
            width={image.width}
            {...image}
            draggable

            offsetX={img && image.width? image.width / 2 : 0}
            offsetY={img && image.height? image.height / 2 : 0}
            onClick={onSelect}
            onTap={onSelect}
            ref={shapeRef}
            onDragMove={e => {
                e.target.x(Math.round(e.target.x() / 10) * 10);
                e.target.y(Math.round(e.target.y() / 10) * 10);
            }}
            onDragEnd={e => {
                onChange({
                    ...image,
                    x: e.target.x(),
                    y: e.target.y()
                });
            }}
            onTransformEnd={e => {
                // transformer is changing scale of the node
                // and NOT its width or height
                // but in the store we have only width and height
                // to match the data better we will reset scale on transform end
                const node = shapeRef.current;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                // we will reset it back
                node.scaleX(1);
                node.scaleY(1);
                onChange({
                    ...image,
                    x: node.x(),
                    y: node.y(),
                    width: Math.max(5, node.width() * scaleX),
                    height: Math.max(node.height() * scaleY)
                });
            }}
        />
            {isSelected && (
                <Transformer
                    ref={trRef}
                />
            )}
        </Fragment>
    );
};

const images = [];
let idCount = 0;
export const Editor = () => {
    const dragUrl = useRef();
    const stageRef = useRef();
    const [images, setImages] = useState([]);
    const [selectedId, selectShape] = useState(null);

    const checkDeselect = e => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };



    const onDragStart = e => {

        dragUrl.current = {
            src: e.target.src,
            height: e.target.height,
            width: e.target.width
        };
    };

    return (
        <div>
            <img
                src={t1}
                height="100"
                width="100"
                onDragStart={e=>onDragStart(e)}

            />
            <img
                src="https://konvajs.org/assets/lion.png"
                height="50"
                width="50"
                onDragStart={e=>onDragStart(e)}
            />
            <div onDrop={e => {
                stageRef.current.setPointersPositions(e);
                setImages(images.concat([
                        {
                            ...stageRef.current.getPointerPosition(),
                            id: idCount++,
                            src: dragUrl.current.src,
                            height: dragUrl.current.height,
                            width: dragUrl.current.width
                        }
                    ])
                );
            }}
                 onDragOver={e => e.preventDefault()}
            >
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    style={{border: '1px solid grey'}}
                    ref={stageRef}
                >
                    <Layer>
                        {images.map((image, i) => {
                            return <URLImage
                                key={i}
                                image={image}
                                isSelected={image.id === selectedId}
                                onSelect={() => {
                                    selectShape(image.id);
                                }}
                                onChange={newAttrs => {
                                    let imgs = images.slice();
                                    imgs[i] = newAttrs;
                                    setImages(imgs);
                                }}
                            />;
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}
