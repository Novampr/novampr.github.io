import InfoCard from '../components/InfoCard';
import tabbyChatIcon from '../assets/projects/tabbychat.webp';

const Software = () => {
  return (
    <div>
      <h1>Wowie, I make projects???</h1>
      <InfoCard imageIcon={tabbyChatIcon} title="TabbyChat" description="Tabs in your Minecraft chat" link="https://modrinth.com/mod/tabbychat" />
    </div>
  );
};

export default Software;