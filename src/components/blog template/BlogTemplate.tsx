import Image from "next/image"


type BlogTemplateTypes = {
    descriptiveStyle: string;
}
const BlogTemplate = ({ descriptiveStyle }: BlogTemplateTypes) => {


    return (
        <section className="flex bg-white p-5">
            <div className="max-w-[1200px] ">
                <div className="w-[400px] shadow-xl rounded-2xl">
                    <div className="relative w-full h-[350px]">
                        <Image fill alt="BlogTemplate image" src='/team/team-4.png' />
                    </div>

                    <div className={`p-5 ${descriptiveStyle}`}>
                        <div className="flex items-center justify-end">
                            <p className="">
                                <span>may 2024 17</span>
                                <i className="ml-3 text-red-500 fa fa-calendar" aria-hidden="true"></i>
                            </p>
                            <span className="mx-3">/</span>
                            <p className="">
                                <span>comment 0</span>
                                <i className="ml-3 text-red-500 fa fa-comment-o" aria-hidden="true"></i>
                            </p>
                            <span className="mx-3">/</span>
                            <p className="">
                                <span>admin</span>
                                <i className="ml-3 text-red-500 fa fa-user-o" aria-hidden="true"></i>
                            </p>
                        </div>

                        <p className="my-5 text-right text-2xl font-semibold">What our customer will get from our company</p>
                        <div className="text-right capitalize">
                            <span className="text-gray-500 text-sm">5 mins read</span>
                            <span className="ml-3 text-red-500">Read more</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogTemplate