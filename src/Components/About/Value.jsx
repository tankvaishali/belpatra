
import { Link } from 'react-router-dom'
import Buttoncom from '../Buttoncom'


export default function Value() {
    const newsItems = [
        {
            delay: "0",
            category: "Integrity",
            title: "Honesty in every action and activity. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            delay: "500",
            category: "Ethics",
            title: "Following the highest standards of business conduct. sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            delay: "1000",
            category: "Dedication",
            title: "Persevering to accomplish a shared vision. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    return (
        <div className="overflow-hidden">
            <div className=" value_bg py-3 py-lg-5 my-5" >
                <div className="container">
                    <section className="news-section">
                        <div className="news-content">
                            <div className="news-header" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                                <h1>Core<br />Values</h1>
                                <p className='text-white pera' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p className='text-white pera' >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link to={"/product"}>
                                    <Buttoncom btn="Know More" />
                                </Link>
                            </div>
                            <div className="news-list">
                                {newsItems.map((item, index) => (
                                    <div className="news-item ">
                                        <h3
                                            className="titletext text-white  pb-2  "
                                        >
                                            {item.category}
                                        </h3>

                                        <div className="news-item-content mt-2">
                                            <h2 className='fs-6 lh-lg text-secondary pera '>{item.title}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}