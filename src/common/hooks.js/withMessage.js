import {useState} from 'react';
import Message from '../../components/Message/Message';
import {GrUserManager, GrTime} from 'react-icons/gr'
import Spinner from '../../components/svg/Spinner';
function withMessage(BaseComponent) {
    const succesMessage = 'Ваша заявка успешно отправлена. В ближайшее время вам перезвонит наш менеджер';
    const failMessage = 'Упс что-то пошло не так, пожалуйста попробуйте позже или позвоните нам по номеру';
    const loadingMessage = 'Идет отправка данных';
    return (props) => {
        const [send, setSend] = useState(false);
        const [error, setError] = useState(false);
        const [loading, setLoading] = useState(false);
        
        const loadingSend = () =>{
            setLoading(true)
        }

        const succesSend = () => {
            setLoading(false)
            setSend(true)
            
        }
        const errorSend = () => {
            setLoading(false)
            setError(true)
        }

       
        const component = loading ? <Message loading={loading} Icon={Spinner} message={loadingMessage}/> : error ? <Message loading={loading} Icon={GrTime} message={failMessage}/>
        : !loading && !send ? <BaseComponent loading={loadingSend} succes={succesSend} error={errorSend}/> : <Message loading={loading} Icon={GrUserManager} message={succesMessage}/> 

        return component
    }
}


export default withMessage;

