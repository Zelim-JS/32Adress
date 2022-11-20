import {useState} from 'react';
import Message from '../../components/Message/Message';
import {GrUserManager, GrTime} from 'react-icons/gr'

function withMessage(BaseComponent) {
    const succesMessage = 'Ваша заявка успешно отправлена. В ближайшее время вам перезвонит наш менеджер';
    const failMessage = 'Упс что-то пошло не так, пожалуйста попробуйте позже или позвоните нам по номеру';
    return (props) => {
        const [send, setSend] = useState(false);
        const [error, setError] = useState(false);

        const succesSend = () => {
            setSend(true)
        }
        const errorSend = () => {
            setError(true)
        }

        const current = send && !error ? <Message Icon={GrUserManager} message={succesMessage}/> : <BaseComponent succes={succesSend} error={errorSend}/>;
        const showing = error ? <Message Icon={GrTime} message={failMessage}/> : current;
        return showing;
    }
}


export default withMessage;