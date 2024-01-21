const Material = () => {
    const pdfs = [
        { name: 'Electrolysis', url: 'https://drive.google.com/file/d/1DyqFmBSeW_3kfFtMiWrI1TYMCuxiLcKk/edit' },
        { name: 'Solutions', url: 'https://drive.google.com/file/d/1DyqFmBSeW_3kfFtMiWrI1TYMCuxiLcKk/edit' },    
      ];
    return ( 
    <div>
    <h2>
        Chemistry Study Material
    </h2>
    <p><b>12 <sup>th</sup> Science</b></p>
    <ul>
        {pdfs.map((pdf, index) => (
          <li key={index}>
            <a href={pdf.url} download={pdf.name}>
              {pdf.name}
            </a>
          </li>
        ))}
      </ul>
    </div> 
    );
}
 
export default Material;