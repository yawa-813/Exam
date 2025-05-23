import { Container, Spinner } from 'react-bootstrap';

function LoadingScreen() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Container className="text-center">
        <div className="mb-4">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z" fill="#2E7D32" fillOpacity="0.2"/>
            <path d="M50 0C50 0 50 0 50 0C77.6 0 100 22.4 100 50C100 50 100 50 100 50H90C90 27.9 72.1 10 50 10C50 10 50 10 50 10V0Z" fill="#2E7D32">
              <animateTransform 
                attributeName="transform" 
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        <h4 className="mb-3" style={{ color: '#2E7D32' }}>Davao Central College</h4>
        <Spinner animation="border" variant="success" />
      </Container>
    </div>
  );
}

export default LoadingScreen;