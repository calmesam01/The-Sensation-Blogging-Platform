import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                THE SENSATION BLOGGING PLATFORM
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best place to write and read blogs related to technology, business, travel and much more<br/>
                                Sign in or Sign up today to get started
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Technology</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/tech">
                                        <a>
                                            <h3 className="h1">Technology</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Learn about different technologies including web development and programming</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/3163804/pexels-photo-3163804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Travel</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/travel">
                                        <a>
                                            <h3 className="h1">Travel</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Read about awesome travel stories from all over the globe
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Business</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/business">
                                        <a>
                                            <h3 className="h1">Business</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Top notch business related blogs because money matters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;
