import { styles } from "../styles";

const Blogs = () => {
  return (
    <>
      <a id="blog" className="anchor"></a>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] flex flex-col justify-between`}
        >
          {/* Add your content here */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/diyjdfac9/image/upload/v1679378023/Screen_Shot_2023-03-21_at_12.53.25_AM_i68ygf.png"
              alt="Your blog image"
              style={{ width: "50%" }}
            />
            
            <p>😀 Click the bellow👇 link to visit the blog!!😀</p>
          </div>
          <div className="flex justify-center pb-8">
            <a
              href="https://medium.com/@davespot10/a-comprehensive-guide-to-deploying-a-react-app-with-aws-s3-git-actions-and-cloudfront-ad076a42126d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Visit Blog
            </a>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 right-0 mb-4 mr-4">
        <p className="text-sm">&copy; 2023 Dawit</p>
      </footer>
    </>
  );
};

export default Blogs;
