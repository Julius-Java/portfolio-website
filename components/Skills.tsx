import Skill from './Skill'

const Skills = () => {
    return (
        <>
            <h2
                className="font-bold text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl mt-64 text-center dark:text-light"
            >
                Skills
            </h2>
            <div
                className="h-screen relative flex items-center justify-center rounded-full
                dark:bg-circularDark bg-circularLight
                lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:bg-circularLightSm sm:dark:bg-circularDarkSm
                lg:h-[50vh] sm:h-[60vh] xs:h-[50vh]"
            >
                <div
                    className="text-center rounded-full font-semibold bg-dark text-light px-8 py-4 transition-all duration-100 hover:scale-110 cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
                >
                    Web
                </div>
                <Skill name='HTML' x={"-7vw"} y={"-10vw"} />
                <Skill name='CSS' x={"-10vw"} y={"9vw"} />
                <Skill name='Javascript' x={"-20vw"} y={"-15vw"} />
                <Skill name='React JS' x={"7vw"} y={"-10vw"} />
                <Skill name='Next JS' x={"10vw"} y={"9vw"} />
                <Skill name='Git' x={"20vw"} y={"-15vw"} />
                <Skill name='Figma' x={"0vw"} y={"-22vw"} />
                <Skill name='SCSS' x={"30vw"} y={"0vw"} />
                <Skill name='Tailwind CSS' x={"-30vw"} y={"0vw"} />
                <Skill name='GitHub' x={"0vw"} y={"20vw"} />
                <Skill name='Web Design' x={"-25vw"} y={"15vw"} />
                <Skill name='Daisy UI' x={"25vw"} y={"15vw"} />
            </div>
        </>
    )
}

export default Skills