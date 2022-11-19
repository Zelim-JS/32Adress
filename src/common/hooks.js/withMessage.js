import {useState} from 'react';
import Message from '../../components/Message/Message';

function withMessage(BaseComponent) {
    return (props) => {
        const [send, setSend] = useState(false);
        const [error, setError] = useState(false);

        const succesSend = () => {
            setSend(true)
        }
        const errorSend = () => {
            setError(true)
        }

        const current = send && !error ? <Message mes={'Данные отправлены'}/> : <BaseComponent succes={succesSend} error={errorSend}/>
        const showing = error ? <Message mes={'Произошла ошибка'}/> : current
        return showing;
    }
}


export default withMessage;