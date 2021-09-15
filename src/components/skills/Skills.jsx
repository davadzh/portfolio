import "../GeneralStyles.scss"
import "./Skills.scss"
import Marquee from "react-double-marquee";

const Skills = (props) => {
    return (
        <div className="skills">
            <pre style={{
                fontFamily: 'NunitoRegular',
                margin: '0'
            }}>
            <Marquee
                speed={0.05}
                direction={"left"}
                delay={0}
            >· ASP.NET        · .NET Core 3.1        · Entity Framework        · C# 9.0        · SQL        · PostgreSQL        · Git        ·React+Redux       · HTML5        · SCSS        · UX/UI        · Adaptive layout        · JS/TS        · Apollo+GraphQL        · Unit testing</Marquee>
                </pre>

        </div>
    );
}

export default Skills;
