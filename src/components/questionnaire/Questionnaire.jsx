import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Questionnaire.scss'

const requestBody = {
    "aim": null,
    "emotions": null,
    "style": null,
    "time": null
}

const REQUEST_ADDRESS = "http://localhost:8000/api/v1/design"

const CONFIG = {
    data: {},
    params: {}
}

export const Questionnaire = ({design, setDesign, setQuestionnaire}) => {
    const [aim, setAim] = React.useState(null);
    const [emotions, setEmotions] = React.useState(null);
    const [style, setStyle] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');

    const aimChange = (event) => {
        setAim(event.target.value);
    };
    const emotionsChange = (event) => {
        setEmotions(event.target.value);
    };
    const styleChange = (event) => {
        setStyle(event.target.value);
    };
    const timeChange = (event) => {
        setTime(event.target.value);
    };

    const generateRequest = (event) => {
        event.preventDefault();
        if (aim === null || emotions === null || style === null || time === null) {
            setHelperText('Пожалуйста, ответьте на все вопросы');
            setError(false);
        } else {
            axios.get(REQUEST_ADDRESS, {
                params: {
                    aim: Number(aim),
                    emotions: Number(emotions),
                    style: Number(style),
                    time: Number(time)
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return (
        <div className="questionnaire">
            <button className="questionnaire__close" onClick={()=> setQuestionnaire(false)}>✕</button>
            <div className="questionnaire__img"></div>
            <form onSubmit={generateRequest}>
                <FormControl component="fieldset" error={error}>
                    <FormLabel component="legend">Как вы плагируете использовать земельный участок?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={aim} onChange={aimChange}>
                        <FormControlLabel value="1" control={<Radio/>} label="для садоводства"/>
                        <FormControlLabel value="2" control={<Radio/>} label="как место активного отдыха"/>
                        <FormControlLabel value="3" control={<Radio/>} label="как комнату на природе"/>
                        <FormControlLabel value="4" control={<Radio/>} label="для красивого вида"/>
                    </RadioGroup>
                    <FormLabel component="legend">Какие чувства вам хотелось бы испытывать, находясь на
                        участке?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={emotions} onChange={emotionsChange}>
                        <FormControlLabel value="1" control={<Radio/>} label="прилив сил"/>
                        <FormControlLabel value="2" control={<Radio/>} label="расслабление"/>
                        <FormControlLabel value="3" control={<Radio/>} label="восстановление здоровья"/>
                        <FormControlLabel value="4" control={<Radio/>} label="задумчивость"/>
                    </RadioGroup>

                    <FormLabel component="legend">В каком стиле вы представляете свой участок?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={style} onChange={styleChange}>
                        <FormControlLabel value="1" control={<Radio/>} label="травянисто-цветущий"/>
                        <FormControlLabel value="2" control={<Radio/>} label="простой летний"/>
                        <FormControlLabel value="3" control={<Radio/>} label="новаторский"/>
                        <FormControlLabel value="4" control={<Radio/>} label="минималистичный"/>
                    </RadioGroup>

                    <FormLabel component="legend">Сколько времени вы готовы уделять уходу за участком?</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={time} onChange={timeChange}>
                        <FormControlLabel value="1" control={<Radio/>} label="несколько раз в неделю"/>
                        <FormControlLabel value="2" control={<Radio/>} label="один раз в неделю"/>
                        <FormControlLabel value="3" control={<Radio/>} label="один раз в месяц"/>
                        <FormControlLabel value="4" control={<Radio/>} label="несколько раз в год"/>
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button type="submit" variant="outlined" color="green">
                        Сгенерировать дизайн
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}
