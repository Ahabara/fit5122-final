const Stat = () => {
    return (
        <div className="mt-10 pb-1">
            <div className="relative">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <dl className="border border-black bg-white shadow-lg sm:grid sm:grid-cols-3">
                            <div
                                className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    International Students
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">50,000+</dd>
                            </div>
                            <div
                                className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Response rate
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">58%</dd>
                            </div>
                            <div
                                className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Countries of Origin
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;