import Skill from './Skill'

const Skills = () => {
    return (
        <>
            <h2
                className="font-bold text-7xl mt-64 text-center dark:text-light"
            >
                Skills
            </h2>
            <div
                className="h-screen relative flex items-center justify-center rounded-full dark:bg-circularDark bg-circularLight"
            >
                <div
                    className="text-center rounded-full font-semibold bg-dark text-light px-8 py-4 transition-all duration-100 hover:scale-110 cursor-pointer dark:bg-light dark:text-dark"
                >
                    Web
                </div>
                <Skill name='HTML' x={"-7vw"} y={"-7vw"} />
                <Skill name='CSS' x={"-10vw"} y={"5vw"} />
                <Skill name='Javascript' x={"-15vw"} y={"-12vw"} />
                <Skill name='React JS' x={"7vw"} y={"-7vw"} />
                <Skill name='Next JS' x={"10vw"} y={"5vw"} />
                <Skill name='Git' x={"15vw"} y={"-12vw"} />
                <Skill name='Figma' x={"0vw"} y={"-18vw"} />
                <Skill name='SCSS' x={"25vw"} y={"0vw"} />
                <Skill name='Tailwind CSS' x={"-25vw"} y={"0vw"} />
                <Skill name='GitHub' x={"0vw"} y={"15vw"} />
                <Skill name='Web Design' x={"-20vw"} y={"15vw"} />
                <Skill name='Daisy UI' x={"20vw"} y={"15vw"} />
            </div>
        </>
    )
}

export default Skills