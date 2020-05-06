import React, {useRef, useState} from 'react'
import {Image, Layer, Stage} from 'react-konva';
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
    table_2, tree, tree_fruit
} from "../../resources/objects/DesignObjects";

const URLImage = ({image, isSelected, onSelect, onChange}) => {
    const [img] = useImage(image.src);
    return (
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
        />
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
    const onDragStart = e => {
        dragImg.current = {
            src: e.target.src,
            height: e.target.height,
            width: e.target.width
        };
    };
    const onDrop = e => {
        stageRef.current.setPointersPositions(e);
        setDesign(design.concat([
                {
                    ...stageRef.current.getPointerPosition(),
                    src: dragImg.current.src,
                    height: dragImg.current.height,
                    width: dragImg.current.width
                }
            ])
        );
    }

    return (
        <div className="editor">
            <div className="editor__items-list">
                <ExpansionPanel id="p-1" expanded={expanded === 'buildings'} onChange={handleChange('buildings')}>
                    <ExpansionPanelSummary expandIcon={<span>🏡</span>}>Жилые постройки</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={house_1} height="300" onDragStart={e => onDragStart(e)}/>
                        <img src={house_2} height="300" onDragStart={e => onDragStart(e)}/>
                        <img src={house_3} height="300" onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-2" expanded={expanded === 'rest-zone'} onChange={handleChange('rest-zone')}>
                    <ExpansionPanelSummary expandIcon={<span>🧩</span>}>Зона отдыха</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={bbq} height="70" onDragStart={e => onDragStart(e)}/>
                        <img src={chair} height="80" onDragStart={e => onDragStart(e)}/>
                        <img src={gazebo} height="125" onDragStart={e => onDragStart(e)}/>
                        <img src={pool} height="125" onDragStart={e => onDragStart(e)}/>
                        <img src={table_1} height="100" onDragStart={e => onDragStart(e)}/>
                        <img src={table_2} height="100" onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-3" expanded={expanded === 'trees'} onChange={handleChange('trees')}>
                    <ExpansionPanelSummary expandIcon={<span>🌳</span>}>Деревья</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={tree} height="130" onDragStart={e => onDragStart(e)}/>
                        <img src={conifer} height="150" onDragStart={e => onDragStart(e)}/>
                        <img src={tree_fruit} height="130" onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-4" expanded={expanded === 'bushes'} onChange={handleChange('bushes')}>
                    <ExpansionPanelSummary expandIcon={<span>🌾</span>}>Кустарники</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={bush_1} height="90" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_2} height="90" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_3} height="90" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_4} height="90" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_5} height="90" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_6} height="90" onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-6" expanded={expanded === 'flowers'} onChange={handleChange('flowers')}>
                    <ExpansionPanelSummary expandIcon={<span>🌺</span>}>Цветы</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={bush_aster} height="80" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_blue} height="80" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_pink} height="80" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_rose_red} height="80" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_rose_white} height="80" onDragStart={e => onDragStart(e)}/>
                        <img src={bush_rose_yellow} height="80" onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel id="p-7" expanded={expanded === 'decorative-objects'} onChange={handleChange('decorative-objects')}>
                    <ExpansionPanelSummary expandIcon={<span>🗿</span>}>Декоративные объекты</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img src={object_1} height="100" onDragStart={e => onDragStart(e)}/>
                        <img src={object_2} height="100" onDragStart={e => onDragStart(e)}/>
                        <img src={lake} height="150" onDragStart={e => onDragStart(e)}/>
                        <img src={stone_1} height="30" onDragStart={e => onDragStart(e)}/>
                        <img src={stone_2} height="30" onDragStart={e => onDragStart(e)}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>



            <div className="editor__canvas" onDrop={e => onDrop(e)} onDragOver={e => e.preventDefault()}>
                <Stage
                    width={750}
                    height={400}
                    ref={stageRef}
                >
                    <Layer>
                        {design.map((image) => {
                            return <URLImage
                                image={image}
                            />;
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}


