import JobCard from '../components/InfoCard';

const About = () => {
  const now = new Date();
  const birthday = new Date(2008, 5, 5, 0, 0, 0, 0);
  const ageDifMs = now.getTime() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const isBirthday = now.getMonth() === birthday.getMonth() &&
                      now.getDate() === birthday.getDate();

  return (
    <div>
      <h1>About me?</h1>
      <p>Heya there! I'm Auri, aka Nova. I'm just a silly software developer.</p>

      <p>Age: {age} {isBirthday && (
        <span>(It's my birthday!)</span>
      )}</p>

      <h2>Yes, I have j*bs</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 480 }}>
        <JobCard imageIcon="https://opencollaboration.dev/resources/favicons/apple-touch-icon.png" description="Operations & Community Coordinator" title="Open Collaboration" link="https://opencollaboration.dev/" />
        <JobCard imageIcon="https://geysermc.org/img/apple-touch-icon.png" description="Developer" title="GeyserMC" link="https://geysermc.org/" />
      </div>
    </div>
  );
};

export default About;
