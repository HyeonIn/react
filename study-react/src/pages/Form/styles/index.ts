import styled from '@emotion/styled'

// Form 페이지 스타일 컴포넌트들
export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-weight: 600;
    color: #333;
    font-size: 14px;
  }
  
  input, select, textarea {
    padding: 12px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
    
    &::placeholder {
      color: #adb5bd;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 24px;
`

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #495057;
  margin: 24px 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #e9ecef;
`

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e1e5e9;
`

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #007bff;
  }
  
  label {
    cursor: pointer;
    font-size: 14px;
    color: #495057;
    font-weight: 500;
    
    &:hover {
      color: #007bff;
    }
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 16px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
  padding: 8px 12px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
` 