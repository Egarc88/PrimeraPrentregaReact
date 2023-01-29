import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Atun from '../imgs/atun.jpg';
import Pechuga from '../imgs/pechuga.jpg';
import Pierna from '../imgs/pierna.jpg';
import Ribeye from '../imgs/Ribeye-Steak.jpeg';
import TOMAHAWWK from '../imgs/TBS_TOMAHAWK.jpg';
import Pollo from '../imgs/Pollo.jpg';

function BasicExample() {
  return (
    <div className='row categories-container'>
    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Atun} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Marisco</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Pechuga}/>
      <Card.Body>
        <Button className="categories-button" variant="primary">aves</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Pierna} />
      <Card.Body>
        <Button className="categories-button" variant="primary">aves</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Ribeye} />
      <Card.Body>
        <Button className="categories-button" variant="primary">res</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={TOMAHAWWK} />
      <Card.Body>
        <Button className="categories-button" variant="primary">Aves</Button>
      </Card.Body>
    </Card>

    <Card className='categories-card' style={{ width: '18rem' }}>
      <Card.Img className='categories-img' variant="top" src={Pollo}/>
      <Card.Body>
        <Button className="categories-button" variant="primary">Aves</Button>
      </Card.Body>
    </Card>
    </div>

  );
}

export default BasicExample;