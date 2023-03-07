import * as ReviewImages from './reviewImages.js';
import * as GalleryImages from './galleryImages.js';
import * as CTAImages from './callToActionImages.js';

const data = {
    header: { 
        headerTop: { 
            tel: 89999999999,
            menuItems : [
                { item: 'Туры', link: '#' },
                { item: 'Создать тур', link: '#' },
                { item: 'Отзывы', link: '#' },
                { item: 'Истории', link: '#' }
            ] 
        },
        headerBottom: { 
            heading: 'Идеальные путешествия существуют',
            description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров'
        }
    },
    mainContent: {
        chooseTour: {
            heading: 'Выбери свой тур',
            menuItems: [
                { item: 'Популярные', link: '#' },
                { item: 'Авторские', link: '#' },
                { item: 'Походы', link: '#' },
                { item: 'Сплавы', link: '#' },
                { item: 'Велопрогулки', link: '#' }
            ],
            tourItems: [
                { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
                { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
                { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
                { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
                { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
                { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' }
            ]
        },
        collectTour: {
            heading: 'Собери свой тур',
            description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
            form: {
                selectOptions: [ 
                    { value: 'mountains-trip', name: 'Путешествие в горы' }, 
                    { value: 'bike-trip', name: 'Велопрогулка' },
                    { value: 'rafting-trip', name: 'Сплав' }
                ],
                licenseAgreementLink: '#',}
        },
        review: {
            heading: 'Отзывы наших путешественников',
            description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
            reviewItems: [
                { name: 'Мария', tour: 'Тур: Вдали от дома', review: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.', photo: ReviewImages.img1 },
                { name: 'Павел', tour: 'Тур: Путешествие в горы', review: 'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.', photo: ReviewImages.img2 }
            ]
        },
        gallery: {
            heading: 'Фотографии путешествий',
            description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
            photoItems: [
                { device: 'phone', photo: GalleryImages.img1, alt: 'Летящий пассажирский самолет над морем' },
                { device: 'desktop', photo: GalleryImages.img2, alt: 'Вид на кемпинг из палатки' },
                { device: 'tablet', photo: GalleryImages.img3, alt: 'Путешественник встречает закат' },
                { device: 'phone', photo: GalleryImages.img4, alt: 'Бескрайняя пустая дорога' },
                { device: 'phone', photo: GalleryImages.img5, alt: 'Путешественники встречают рассвет на скалах' },
                { device: 'tablet', photo: GalleryImages.img6, alt: 'Девушка смотрит бумажную карту в машине' },
                { device: 'desktop', photo: GalleryImages.img7, alt: 'Дорога по высокому мосту в лесной местности' },
                { device: 'phone', photo: GalleryImages.img8, alt: 'Кемпинг у водоема, путешествие на автомобиле' },
                { device: 'phone', photo: GalleryImages.img9, alt: 'Брусчатая дорога в переулке' },
                { device: 'phone', photo: GalleryImages.img10, alt: 'Вечерний уютный город' },
                { device: 'phone', photo: GalleryImages.img11, alt: 'Путешественник любуется красотой фьорда в солнечный летний день' },
                { device: 'tablet', photo: GalleryImages.img12, alt: 'Оживленная вечерняя улица' },
                { device: 'desktop', photo: GalleryImages.img13, alt: 'Девушка в купальнике сплавляется по озеру' }
            ],
        },
        story: {
            heading: 'Истории путешествий',
            description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
            storyItems: [
                {
                    heading: 'Автостопом в Стамбул',
                    description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
                    list: ['вкусная еда', 'дешевый транспорт', 'красивый город.'],
                    socialNetworks: [{ name: 'instagram', link: '#' }, { name: 'facebook', link: '#' }, { name: 'YouTube', link: '#' }],
                    link: '#'
                },
                {
                    heading: 'Автостопом в Стамбул',
                    description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
                    list: false,
                    socialNetworks: [{ name: 'instagram', link: '#' }, { name: 'ВКонтакте', link: '#' }],
                    link: '#'
                },
                {
                    heading: 'Автостопом в Стамбул',
                    description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
                    list: false,
                    socialNetworks: [{ name: 'instagram', link: '#' }, { name: 'facebook', link: '#' }, { name: 'ВКонтакте', link: '#' }],
                    link: '#'
                }
            ],
        }
    },
    callToAction: {
        img: { photo: CTAImages.img1, alt: 'Живописный вид на зеленые луга, лес, водоем и белеющие в далеке вершины гор' },
        heading: 'Пора в путешествие вместе с нами!',
        email: { email: 'yourtour@gmail.com', link: 'mailto:yourtour@gmail.com' }
    },
    footer: {
        socialNetworks: [ 
            { name: 'instagram', link: '#', class: 'ig' },
            { name: 'facebook', link: '#', class: 'fb' },
            { name: 'vkontakte', link: '#', class: 'vk' }
        ]
    }
}

export default data;