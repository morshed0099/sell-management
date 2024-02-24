
import Button from './Button';

const CategoyButton = () => {
    return (
        <div className='flex flex-wrap gap-1'>
            <Button name={'All Category'}  outline={true}/>
            <Button name={'All Category'}   outline={true}/>
            <Button name={'All Category'}  outline={true} />
            <Button name={'All'}  outline={true} />
            <Button name={'Category'}   outline={true}/>            
        </div>
    );
};

export default CategoyButton;