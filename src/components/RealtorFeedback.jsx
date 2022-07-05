import React, { useState } from 'react';
import { Modal, Input, Rate, Button } from 'antd';
import styles from './RealtorFeedback.module.css';
import realtor from '../img/User.jpg';

import { ReactComponent as Star } from '../icons/Star.svg';

const { TextArea } = Input;




const RealtorFeedback = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);
    const [currentRating, setCurrentRating] = useState(null);


    const selectRatingHandler = (index) => {
        if (currentRating === index) {
            setCurrentRating(null)
        } else {
            setCurrentRating(index)
        }
    }


    const RatingItem = (props) => {

        const { index } = props;

        return (
            <div className={`${styles.starItemWrapper} ${currentRating >= index ? styles.selected : ''} `} onClick={() => { selectRatingHandler(index) }}>
                <Star area-index={index} />
            </div>
        )
    }

    const wordScoreCases = [
        'балл',
        'балла',
        'балла',
        'балла',
        'баллов'
    ]

    const handleCancel = () => {
        // setIsModalVisible(false);
    };


    return (
        <div className={styles.realtorFeedback__wrapper}>


            <Modal className={styles.card} footer={null} visible={isModalVisible} onCancel={handleCancel}>

                <h4 className={styles.title}>Ваш отзыв о риэлторе</h4>
                <Input className={styles.nameInput}
                    placeholder='Ваше имя' />

                <div className={styles.ratingBlock}>
                    <div className={styles.ratingTextWrapper} >
                        <p className={styles.ratingTitle}>Поставьте оценку</p>
                        {currentRating && <p className={styles.ratingInTextForm}> {currentRating} {wordScoreCases[currentRating - 1]} из 5</p>}
                    </div>
                    <Rate className={styles.ratingSelector} character={({ index }) => <RatingItem index={index + 1} />} />
                </div>

                <div className={styles.commentBlock}>

                    <div className={styles.realtorInfo}>
                        <img className={styles.realtorPhoto} src={realtor} />

                        <div className={styles.realtorNameAndLocation}>

                            <p className={styles.name}>Григорий Лепс</p>
                            <p className={styles.location}>Ростов-на-Дону, Россия</p>


                        </div>


                    </div>

                    <TextArea className={styles.commentTextarea}
                        placeholder="Напишите свой отзыв о риэлторе..."
                    />

                    <p className={styles.tip}>Расскажите, как прошло общение, встреча или сделка  —  что понравилось, а что не очень.</p>

                        

                </div>


                <Button className={styles.submitButton}>Добавить отзыв</Button>

                <p className={styles.terms}>Оставляя отзыв, Вы соглашаетесь c условиями <a className={styles.policy}>политики конфиденциальности.</a></p>

            </Modal>



        </div>

    )
}



export default RealtorFeedback; 