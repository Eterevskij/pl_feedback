import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import styles from './FeedbackThankYou.module.css';

import { ReactComponent as Thumb } from '../icons/Thumb.svg';

const { TextArea } = Input;




const FeedbackThankYou = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    

    return (
        <div className={styles.realtorFeedback__wrapper}>

            <Modal className={styles.card} footer={null} visible={isModalVisible} onCancel={handleCancel}>

                <Thumb className={styles.thumb} />

                <h5 className={styles.title}>Спасибо за Ваш отзыв!</h5>

                <p className={styles.subtitle}>Благодарим Вас за оставленный отзыв о работе данного риэлтора. Ваши отзывы помогут его дальнейшему развитию.</p>

                <Button className={styles.backBtn}>На страницу риэлтора</Button>

            </Modal>



        </div>

    )
}



export default FeedbackThankYou; 