import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Price = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Promo = styled.span`
  color: #FF5733;
  text-decoration: line-through;
`;

export const Original = styled.span`
  font-weight: bold;
  color: #2ECC71;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 16px;
  margin: 0 10px;
`;