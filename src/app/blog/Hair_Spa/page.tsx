import { NextPage } from "next";
import Image from "next/image";
import crousalPick from "../../images/IMG_0140.JPG"
import { CiUser } from "react-icons/ci";



const HairSpa: NextPage = () => {
    return (
        <div>
            <div className="HairOilContainer flex justify-center">
                <div className="hairOilContent">
            <div className="text-center mt-20 pt-5"><span className="underline underline-offset-8 leading-relaxed tracking-wide font-bold text-xl text-stone-900 blogContentHeading">HAIR SPA - NEED AND IMPORTANCE</span></div>
            
            <div className="p-10 pb-0 "><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">Are you someone who feels the need to style their hair each time they have to go out? If you
nodded in affirmation, we feel sorry for you. Styling your hair regularly means excess heat
and chemicals, isn’t it? Don’t we all secretly wish for naturally lustrous, healthy-looking, and
salon-styled hair? Well, that remains a dream for most of us, except for some of God’s
favorites. However, all hope is not lost. Yes, there are ways. Now your brain might quickly
jump to conclusions and guess that the answers are smoothening, keratin, botox, and other
chemical treatments. But, that’s not the case. We are talking about HAIR SPAS!!! </span></div>

            <div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">A hair spa can be defined as a hair-restoration treatment that involves several steps,
including washing, applying a hair mask, and a steam treatment followed by a rinse cycle
after conditioner. If you are sick and tired of frizzy, dull, and unmanageable hair, a hair spa
is your answer. Unlike numerous hair treatments, hair spas are of various kinds and can be
easily customized. Dealing with severe hair or scalp issues? You, now, have a resolution that
can address them all! </span></div>
<div className="p-10 pb-0"><span className="font-normal text-2xl text-cyan-600 tracking-wide blogContent">Why the need for hair spas?</span></div>

                </div>
                <Image className="hairOlingFullBlog pe-10" src={crousalPick} alt="..." />

            </div>
            <div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">Have you ever sat in a salon to get your hair styled and the hairdresser just wouldn’t stop
going on and on about everything that is wrong with your hair? Let’s be honest, we have all
been there. And even though an inner voice in our head says, “Bro, I just came here for a
blowout!”, they aren’t completely out of place. Excessive heat, pollution, lack of Essential
Fatty Acids, Collagen and other proteins in the diet, and several other factors impact hair
quality. Additionally, applying impure oils and chemical additives adds to the damage as
well.</span></div>
            <div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">You can turn to a hair spa treatment and, slowly, nourish your hair back to life! These
carefully curated treatments are not only customizable but also proven to be highly
effective. They are widely considered the much-needed TLC for hair after a long wedding or
festive season. Now if you are wondering why can’t I just get a keratin or botox treatment
and skip the hassle for a good 2 or 3 months, let us stop you right here. For starters, THEY
ARE NOT TREATMENTS. They only cosmetically alter the top layer of hair.</span></div>
            <div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">If you haven’t gone in for a hair spa ever, consider this a sign! Now if you are feeling clueless
again, we are here to hold your hand through this.</span></div>
            <div className="p-10 pb-0"><span className="font-normal text-2xl text-cyan-600 tracking-wide blogContent">Where to get one?</span></div>
            <div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">Varnya Salons in Gurgaon (Eros City Square, Sec 49 and Spaze, Sec 69) is a household name
that has partnered with the world-renowned brand Aveda. At our salons, you will find the
most exclusive products and premium hair services, leaving your hair like never before. We
are hair experts and know what is best for it. We strongly believe that mindful and holistic
wellness and beauty go a long way and hence use naturally-derived Aveda products.</span></div>

<div className="p-10 pb-0"><span className="font-normal text-2xl text-cyan-600 tracking-wide blogContent">About Aveda and why Aveda?</span></div>
<div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">How good would it be if you were to find a magical product for your skin or hair that is not
only result-yielding but also cruelty-free? What if we tell you that there is a whole range of
plant-powered products with naturally derived ingredients that can do wonders for your
hair? We don’t think anything can top THIS!!!! Aveda is a widely celebrated brand that offers
a vegan and highly exquisite range of hair and skin products. Since the inception of the
brand, they have largely focused on curating hair products that are devoid of synthetic
ingredients and nourished with the goodness of nature.</span></div>

<div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">Once you try Aveda for your hair, there is no going back. Thousands of people around the
world have placed their trust in the brand and completely swear by its products. Whether
you seek damage repair, texture improvement, or simple nourishment, there is a product
solution for everyone!</span></div>

<div className="p-10 pb-0"><span className="font-normal text-2xl text-cyan-600 tracking-wide blogContent">Summing up</span></div>
<div className="p-10 pb-0"><span className="font-extralight leading-relaxed text-neutral-600 tracking-wide blogContent">Varnya is proud to be the only Aveda family salon in Delhi-NCR, and welcomes you to try
Aveda’s groundbreaking products that are the perfect amalgamation of modern tech and
nature. Not only will you be doing your hair a big favor, but also the environment.
Consciously-created, high-performance solutions, and mesmerizing aromas - that is Aveda
for you!</span></div>

           
        </div>
    )
}

export default HairSpa;
