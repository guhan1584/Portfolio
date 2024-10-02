import { Card, Flex, Spacer } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Flex justifyContent={"center"}>
      <Card>
        <h1>
          Programming languages
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
          </ul>
        </h1>
      </Card>
      <Spacer padding={5} />
      <Card>
        <h1>
          Frameworks
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>FastAPI</li>
            <li>Flask</li>
          </ul>
        </h1>
      </Card>
      <Spacer padding={5} />
      <Card>
        <h1>
          Tools
          <ul>
            <li>Docker</li>
            <li>Virtual machines</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>OpenAI API</li>
            <li>GPT4ALL</li>
            <li>Vercel</li>
          </ul>
        </h1>
      </Card>
      <Spacer padding={5} />
      <Card>
        <h1>
          Personal Skills
          <ul>
            <li>Problem-solving</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Adaptability</li>
            <li>Time management</li>
            <li>Leadership</li>
            <li>Creativity</li>
            <li>Aambitious</li>
          </ul>
        </h1>
      </Card>
    </Flex>
  );
};

export default Skills;
