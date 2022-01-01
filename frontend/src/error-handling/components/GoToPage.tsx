import react from "react";
import '../css/GoToPage.css';

interface GoToPageProps {
  link: string;
  text: string;
}

const GoToPage: React.FC<GoToPageProps> = ({link, text}) => {
  return (
    <a href={link} className="goToPage">{text}</a>
  );
}

export default GoToPage;
