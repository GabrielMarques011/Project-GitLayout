import "./style.css";

const Conteudo = ({title, descript}) => {
  return (
    <div className="container">
        <h2>{title}</h2>
        <p>{descript}</p>

        <hr/>
    </div>
  );
};

export { Conteudo };