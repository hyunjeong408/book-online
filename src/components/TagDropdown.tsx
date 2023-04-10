import React, {ChangeEvent, useState} from 'react';
import styles from './css/TagDropdown.module.css';

const TAG_DATA = [
    { id: 0, value: '기타' },
    { id: 1, value: '사랑' },
    { id: 2, value: '성장/청춘' },
    { id: 3, value: '공포/스릴러/미스테리' },
    { id: 4, value: '예술적' },
    { id: 5, value: '가족/인생/교훈' },
    { id: 6, value: '코미디' },
    { id: 7, value: '현실/정보/역사' },
    { id: 8, value: '판타지' }
];

function TagDropdown(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTag, setSelectedTag] = useState("");
    const onToggle = () => setIsOpen(!isOpen);
    const onOptionClicked = (value: string, index: number) => () => {
        setSelectedTag(value);
        props.propFunction(index, value);
        setIsOpen(false);
    };
    return(
        <div className={styles['dropdown']}>
            <div className={styles['dropdown-box']} onClick={onToggle}>
                태그 선택
                <div>
                {
                    isOpen?
                    <button className={styles['dropdown-btn']}><img src="/assets/arrow-up-color.svg" alt="tag-dropdown-arrow"></img></button>
                    :<button className={styles['dropdown-btn']}><img src="/assets/arrow-down-color.svg" alt="tag-dropdown-arrow"></img></button>
                }
                {selectedTag}
                </div>
            </div>
            {isOpen?
                (<div className={styles['dropdown-box-wrap']}>
                    <ul>
                            <>
                            <li onClick={onOptionClicked(TAG_DATA[0].value, 0)}>{TAG_DATA[0].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[1].value, 1)}>{TAG_DATA[1].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[2].value, 2)}>{TAG_DATA[2].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[3].value, 3)}>{TAG_DATA[3].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[4].value, 4)}>{TAG_DATA[4].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[5].value, 5)}>{TAG_DATA[5].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[6].value, 6)}>{TAG_DATA[6].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[7].value, 7)}>{TAG_DATA[7].value}</li>
                            <li onClick={onOptionClicked(TAG_DATA[8].value, 8)}>{TAG_DATA[8].value}</li>
                            </>
                    </ul>
                </div>)
                :null
            }
        </div>

    );
  }
  
  export default TagDropdown;