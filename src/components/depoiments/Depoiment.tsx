import "./depoiment.css";

import { Quote } from "react-bootstrap-icons";

export default function Depoiment() {
    return (
        <div className="flex justify-evenly">
            <div>
                <p className="baloom">
                    <Quote className="inline-block text-2xl text-blue-600" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, perspiciatis. Corporis veritatis ullam aliquam.
                    <Quote className="inline-block text-2xl text-blue-600" />
                </p>
            </div>
            <div>
                <p className="baloom">
                    <Quote className="inline-block text-2xl text-blue-600" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, perspiciatis. Corporis veritatis ullam aliquam.
                    <Quote className="inline-block text-2xl text-blue-600" />
                </p>
            </div>
            <div>
                <p className="baloom">
                    <Quote className="inline-block text-2xl text-blue-600" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, perspiciatis. Corporis veritatis ullam aliquam.
                    <Quote className="inline-block text-2xl text-blue-600" />
                </p>
            </div>
        </div>

    );
}