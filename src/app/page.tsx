import { Card } from "@/Component/Card";
import Arcodeon from "@/Component/Card/Arcodeon";

export default function Home() {
  return (
    <div className="flex justify-center absolute top-44 w-full z-40 py-10">
      <Card.Display className="z-30 bg-white rounded-xl shadow-2xl w-[500px] px-4 py-6">
        <Card.Title className="flex items-center text-5xl font-bold px-2">
          FAQs
        </Card.Title>
        <div className=" w-full">
          <Card.Arcodeon title="What is Frontend Mentos, and how will it help me?">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, blanditiis laudantium, qui dignissimos aspernatur
              impedit animi esse accusamus repudiandae facilis deleniti
              molestias assumenda? Recusandae, impedit. Maxime dolorum quae
              quisquam sapiente.
            </p>
          </Card.Arcodeon>
          <Card.Arcodeon title="Is Frontend Mentor free?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            blanditiis laudantium, qui dignissimos aspernatur impedit animi esse
            accusamus repudiandae facilis deleniti molestias assumenda?
            Recusandae, impedit. Maxime dolorum quae quisquam sapiente.
          </Card.Arcodeon>
          <Card.Arcodeon title="Can i use Frontend Mentor projects in my portfolio?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            blanditiis laudantium, qui dignissimos aspernatur impedit animi esse
            accusamus repudiandae facilis deleniti molestias assumenda?
            Recusandae, impedit. Maxime dolorum quae quisquam sapiente.
          </Card.Arcodeon>
          <Card.Arcodeon title="Can i use Frontend Mentor projects in my portfolio?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            blanditiis laudantium, qui dignissimos aspernatur impedit animi esse
            accusamus repudiandae facilis deleniti molestias assumenda?
            Recusandae, impedit. Maxime dolorum quae quisquam sapiente.
          </Card.Arcodeon>
        </div>
        <footer className="py-3">
          <h2 className="text-lg font-semibold">
            Desenvolvido por: Daniel Marcos
          </h2>
          <p>
            Exercício do:{" "}
            <a
              className="text-Grayish-purple underline hover:text-Dark-purple"
              href="https://www.frontendmentor.io/home"
            >
              FrontEnd Mentor
            </a>
          </p>
          <p>
            Link do Repositório:{" "}
            <a
              className="text-Grayish-purple underline hover:text-Dark-purple"
              href="https://github.com/DanielMarcosPires/Faqs"
            >
              Github.com
            </a>
          </p>
        </footer>
      </Card.Display>
    </div>
  );
}
