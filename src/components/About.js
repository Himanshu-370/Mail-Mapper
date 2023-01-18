import React from "react";

function About() {
  return (
    <div className="container about">
      <div className="hero-main">
        <p className="para">
          Mail Mapper is a tool that allows users to search for the email
          addresses of employees at various companies. It can be particularly
          useful for sales and marketing professionals who are looking to reach
          out to potential customers or for students who want to connect with
          them for referrals.
          <br />
          <br />
          To use Mail Mapper, users simply enter the domain of the company they
          are interested in and select the department they want to search
          within. The tool then performs a search using publicly available
          information and returns a list of email addresses that match the
          search criteria.
          <br />
          <br /> Mail Mapper can save users a lot of time and effort compared to
          trying to find email addresses manually, and it can help users reach
          out to the right people at the right companies to make the most of
          their marketing efforts.
        </p>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://github.com/Himanshu-370/Mail-Mapper"
              target="_blank"
            >
              <svg
                width="40"
                height="40"
                fill="#890000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/himanshu-singh-85454b160/"
              target="_blank"
            >
              <svg
                width="40"
                height="40"
                fill="#890000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3.433C2 2.64 2.658 2 3.469 2H20.53c.813 0 1.47.641 1.47 1.433v17.134C22 21.36 21.343 22 20.531 22H3.47C2.658 22 2 21.359 2 20.567V3.433Zm6.179 15.31V9.71H5.177v9.031H8.18Zm-1.5-10.265c1.046 0 1.697-.693 1.697-1.56-.018-.887-.65-1.56-1.677-1.56C5.67 5.357 5 6.032 5 6.918c0 .867.651 1.56 1.659 1.56h.02Zm6.135 10.264V13.7c0-.27.02-.54.1-.733.216-.538.71-1.097 1.54-1.097 1.086 0 1.52.827 1.52 2.042v4.832h3.001v-5.18c0-2.776-1.48-4.066-3.455-4.066-1.592 0-2.306.876-2.706 1.492v.031h-.02l.02-.031V9.71h-3c.037.848 0 9.031 0 9.031h3Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/himanshu.singh_20/"
              target="_blank"
            >
              <svg
                width="40"
                height="40"
                fill="#890000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
