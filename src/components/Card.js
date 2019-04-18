import React from 'react';

class Card extends React.Component {
  state = {
    opened: false
  }
  
  render() {
    const {
      id,
      backgroundImage,
      title,
      releaseDate,
      score,
      votes,
      description,
      onLike,
      hearted
    } = this.props;
    const { opened } = this.state;
    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        />
    
        <div className="card__title">
          {title}
        </div>
    
        <div
          className="card__like"
          onClick={()=>onLike(id, title)}
        >
            <i className={`fa ${hearted ? 'fa-heart' : 'fa-heart-o'}`} />
        </div>
    
        <div className="card__subtitle">
            <span>{releaseDate}</span>
            <span>{score} ({votes} votes)</span>
        </div>
    
        <div className="card-info">
        <div
          className="card-info__header"
          onClick={() => this.setState({ opened: !opened })}>
          Summary
        </div>
          
          {opened
            ? (
              <div className="card-info__description">
                {description}
              </div>
            )
            : null
          }
    </div>
</div>

    );
  }
}

export default Card;
