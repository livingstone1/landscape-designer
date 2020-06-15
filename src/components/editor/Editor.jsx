import React, {Fragment, useEffect, useRef, useState} from 'react'
import {Image, Layer, Stage, Transformer} from 'react-konva';
import useImage from 'use-image';
import 'react-light-accordion/demo/css/index.css';

import './Editor.scss'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {
    bbq,
    bush_1,
    bush_2,
    bush_3,
    bush_4,
    bush_5,
    bush_6,
    bush_aster,
    bush_blue,
    bush_pink,
    bush_rose_red,
    bush_rose_white, bush_rose_yellow,
    chair, conifer,
    gazebo,
    house_1,
    house_2,
    house_3, lake, object_1, object_2,
    pool, stone_1, stone_2,
    table_1,
    table_2, tree, tree_fruit,
    visualModels,
    getModelById
} from "../../resources/objects/DesignObjects";
import html2canvas from "html2canvas";
import genDesign from "../../resources/coord";
import {Questionnaire} from "../questionnaire/Questionnaire";
import axios from "axios";

//obj id counter
var designObjectId = 0;

const DesignObj = ({image, isSelected, onSelect, onChange, onDragStart}) => {
    const [img] = useImage(image.src);

    const shapeRef = useRef();
    const trRef = useRef();
    useEffect(() => {
        if (isSelected) {
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
                offsetX={img && image.width ? image.width / 2 : 0}
                offsetY={img && image.height ? image.height / 2 : 0}
                onDragMove={e => {
                    e.target.x(Math.round(e.target.x() / 10) * 10);
                    e.target.y(Math.round(e.target.y() / 10) * 10);
                }}

                draggable

                {...image}

                onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}

                onDragEnd={e => {
                    //console.log(shapeRef);
                    onChange({
                        ...image,
                        x: e.target.x(),
                        y: e.target.y()
                    });
                }}
                onDragStart={onDragStart}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </Fragment>

    );
};

export const Editor = () => {
    //accordion
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //d&d
    const dragImg = useRef();
    const stageRef = useRef();
    const [design, setDesign] = useState([]);
    const [selectedId, selectShape] = useState(null);

    const onDragStart = e => {
        dragImg.current = {
            src: e.target.src,
            height: e.target.height,
            width: e.target.width
        };
        console.log(e.target);
    };
    const onDrop = e => {
        console.log(e);
        stageRef.current.setPointersPositions(e);
        setDesign(
            design.concat([
                {
                    ...stageRef.current.getPointerPosition(),
                    id: designObjectId++,
                    src: dragImg.current.src,
                    height: dragImg.current.height,
                    width: dragImg.current.width
                }
            ])
        );
        console.log(dragImg.current);
    }
    const onDragStartZIndex = e => {
        const id = e.target.id();
        const designObjects = design.slice();
        const object = designObjects.find(i => i.id === id);
        const index = designObjects.indexOf(object);
        designObjects.splice(index, 1);
        designObjects.push(object);
        setDesign(designObjects);
    }

    //design img
    const downloadURI = (uri, name) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const saveAsImage = () => {
        html2canvas(document.querySelector('.editor__canvas')).then(function (canvas) {
            const data = canvas.toDataURL('image/png');
            downloadURI(data, 'design.png');
        });
    }

    const checkDeselect = e => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    //generate
    const [questionnaire, setQuestionnaire] = useState(false);

    const generate= () => {
        setDesign([]);
        setQuestionnaire(true);
    }

    return (
        <div className="editor">
            <div className="editor__control-panel">

                <button className="editor__test" onClick={() => setDesign(design.concat(
                    [{
                        x: 100,
                        id: designObjectId++,
                        y: 100,
                        src: stone_1,
                        height: 50,
                        width: 50
                    }]
                ))}>Тест отрисовки</button>

                <button className="editor__advice" onClick={() => console.log(design)}>Получить совет</button>
                <button className="editor__generate" onClick={() =>
                    generate()}>Сгенерировать дизайн</button>
                <button className="editor__open" onClick={() => console.log(getModelById("house_1"))}>Открыть проект</button>
                <button className="editor__save" onClick={() => saveAsImage()}>Сохранить проект</button>
            </div>
            {questionnaire &&  <Questionnaire design={design} setDesign={setDesign} setQuestionnaire={setQuestionnaire}/>}
            <div className="editor__items-list">
                <ExpansionPanel id="p-1" expanded={expanded === 'buildings'} onChange={handleChange('buildings')}>
                    <ExpansionPanelSummary expandIcon={<span>🏡</span>}>Жилые постройки</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={getModelById("house_1").img} height={getModelById("house_1").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("house_2").img} height={getModelById("house_2").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("house_3").img} height={getModelById("house_3").height}onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-2" expanded={expanded === 'rest-zone'} onChange={handleChange('rest-zone')}>
                    <ExpansionPanelSummary expandIcon={<span>🧩</span>}>Зона отдыха</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={getModelById("bbq").img} height={getModelById("bbq").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("chair").img} height={getModelById("chair").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("gazebo").img} height={getModelById("gazebo").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("pool").img} height={getModelById("pool").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("table_1").img} height={getModelById("table_1").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("table_2").img} height={getModelById("table_2").height} onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-3" expanded={expanded === 'trees'} onChange={handleChange('trees')}>
                    <ExpansionPanelSummary expandIcon={<span>🌳</span>}>Деревья</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={getModelById("tree").img} height={getModelById("tree").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("conifer").img} height={getModelById("conifer").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("tree_fruit").img} height={getModelById("tree_fruit").height} onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-4" expanded={expanded === 'bushes'} onChange={handleChange('bushes')}>
                    <ExpansionPanelSummary expandIcon={<span>🌾</span>}>Кустарники</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={getModelById("bush_1").img} height={getModelById("bush_1").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_2").img} height={getModelById("bush_2").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_3").img} height={getModelById("bush_3").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_4").img} height={getModelById("bush_4").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_5").img} height={getModelById("bush_5").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_6").img} height={getModelById("bush_6").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_berry").img} height={getModelById("bush_berry").height} onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-6" expanded={expanded === 'flowers'} onChange={handleChange('flowers')}>
                    <ExpansionPanelSummary expandIcon={<span>🌺</span>}>Цветы</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={getModelById("bush_aster").img} height={getModelById("bush_aster").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_blue").img} height={getModelById("bush_blue").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_pink").img} height={getModelById("bush_pink").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_rose_red").img} height={getModelById("bush_rose_red").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_rose_white").img} height={getModelById("bush_rose_white").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("bush_rose_yellow").img} height={getModelById("bush_rose_yellow").height} onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-7" expanded={expanded === 'decorative-objects'}
                                onChange={handleChange('decorative-objects')}>
                    <ExpansionPanelSummary expandIcon={<span>🗿</span>}>Декоративные объекты</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={getModelById("object_1").img} height={getModelById("object_1").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("object_2").img} height={getModelById("object_2").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("lake").img} height={getModelById("lake").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("stone_1").img} height={getModelById("stone_1").height} onDragStart={e => onDragStart(e)}/>
                        <img src={getModelById("stone_2").img} height={getModelById("stone_2").height} onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className="editor__canvas" onDrop={e => onDrop(e)} onDragOver={e => e.preventDefault()}>
                <Stage
                    width={750}
                    height={400}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    ref={stageRef}
                >
                    <Layer>
                        {design.map((designObject, i) => {
                            return <DesignObj
                                key={designObject.id}
                                image={designObject}
                                onChange={newAttrs => {
                                    const designObjects = design.slice();
                                    design[i] = newAttrs;
                                    setDesign(designObjects);
                                }}
                                isSelected={designObject.id === selectedId}
                                onSelect={() => {
                                    selectShape(designObject.id);
                                }}
                                onDragStart={onDragStartZIndex}
                            />;
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}
