import React from 'react';
import StoryItemElement from './StoryItemElement.jsx';
import styles from './StoryGroup.module.scss';

const storyItems = [
    {
        heading: 'Автостопом в Стамбул',
        description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в&nbsp;формировании новых предложений:',
        list: ['вкусная еда', 'дешевый транспорт', 'красивый город.'],
        socialNetworks: [{ name: 'instagram', link: '#' }, { name: 'facebook', link: '#' }, { name: 'YouTube', link: '#' }],
        link: '#'
    },
    {
        heading: 'Автостопом в Стамбул',
        description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в&nbsp;формировании новых предложений.',
        list: false,
        socialNetworks: [{ name: 'instagram', link: '#' }, { name: 'ВКонтакте', link: '#' }],
        link: '#'
    },
    {
        heading: 'Автостопом в Стамбул',
        description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в&nbsp;формировании новых предложений.',
        list: false,
        socialNetworks: [{ name: 'instagram', link: '#' }, { name: 'facebook', link: '#' }, { name: 'ВКонтакте', link: '#' }],
        link: '#'
    }
];

const StoryGroup = () => {
    const storyItemsElements = storyItems.map((item, index) =>
        <StoryItemElement key={index.toString()} 
                          heading={item.heading} 
                          description={item.description} 
                          list={item.list} 
                          socialNetworks={item.socialNetworks} 
                          link={item.link} 
                          num={++index} />
    );

    return (
        <div className={styles.mainWrapper}>
            {storyItemsElements}
        </div>
    )
}

export default StoryGroup;