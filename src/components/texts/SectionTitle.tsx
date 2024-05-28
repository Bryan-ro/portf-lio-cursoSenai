import { useEffect, useState } from "react";

type SectionTitleProps = { text: string }

export default function SectionTitle({ text }: SectionTitleProps) {
    const [firstThreeLetters, setFirstThreeLetters] = useState("");
    const [restOfLetters, setRestOfLetters] = useState("");

    useEffect(() => {
        const getThreeFirstLettersOfText = () => {
            if (text) {
                const [one, two, three, ...rest] = text;

                let restLetters = "";
                rest.forEach((letter) => {
                    restLetters += letter;
                });


                setFirstThreeLetters(one + two + three);
                setRestOfLetters(restLetters);
            }
        };

        getThreeFirstLettersOfText();
    });

    return <h1 className="text-[32px] font-raleway font-extrabold text-primary mb-7"><span className="border-blue-600 border-b-4 pb-2">{firstThreeLetters}</span>{restOfLetters}</h1>;
}