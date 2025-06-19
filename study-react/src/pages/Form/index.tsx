import { useForm, useWatch } from 'react-hook-form'
import {
  FormContainer,
  Form,
  FormItemContainer,
  Title,
  SubTitle,
  CheckboxGroup,
  CheckboxItem,
  SubmitButton,
  ErrorMessage
} from './styles'

// 폼 데이터 타입 정의
interface FormData {
  name: string;
  role: string;
  techStack: string[];
  designTools: string[];
  github?: string;
  portfolio?: string;
  experienceYear?: number;
  projectSummary?: string;
}

// 상수 정의
const ROLE_LIST = [
{
  label: '개발자',
  value: 'developer'
}, {
  label: '디자이너',
  value: 'designer'
}, {
  label: '기획자',
  value: 'planner'
}];
const TECH_STACK_LIST = ['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'C#'];
const DESIGN_TOOLS_LIST = ['Figma', 'Photoshop', 'Illustrator', 'Sketch', 'Adobe XD'];

/**
 * 폼 제출 결과를 콘솔에 출력하는 함수
 * 직무별로 필요한 정보만 필터링하여 표시
 */
const showResult = (data: FormData) => {
  const result = {
    name: data.name,
    role: data.role,
  } as Record<string, any>;

  // 직무별로 필요한 정보만 추가
  switch (data.role) {
    case 'developer':
      result.techStack = data.techStack;
      result.github = data.github;
      break;
    case 'designer':
      result.designTools = data.designTools;
      result.portfolio = data.portfolio;
      break;
    case 'planner':
      result.experienceYear = data.experienceYear;
      result.projectSummary = data.projectSummary;
      break;
  }
  
  console.log('폼 제출 결과:', result);
}

/**
 * 폼 아이템 컴포넌트
 * 라벨, 입력 필드, 에러 메시지를 포함
 */
const FormItem = ({
  label, 
  children, 
  errorMessage
}: {
  label: string;
  children: React.ReactNode;
  errorMessage?: string;
}) => {
  return (
    <FormItemContainer>
      <label>{label}</label>
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormItemContainer>
  )
}

/**
 * 직원 등록 폼 페이지 컴포넌트
 */
const FormPage = () => {
  // React Hook Form 설정
  const { 
    handleSubmit, 
    register, 
    control, 
    formState: { errors } 
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      role: '',
      techStack: [],
      designTools: []
    }
  });

  // 직무 선택 상태 감시
  const watchRole = useWatch({ control: control, name: 'role' });

  // 폼 제출 핸들러
  const onSubmit = (data: FormData) => {
    showResult(data);
  }
  
  return (
    <FormContainer>
      <Title>직원 등록 폼</Title>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* 기본 정보 섹션 */}
        <SubTitle>기본정보 입력</SubTitle>
        
        <FormItem label="이름" errorMessage={errors.name?.message}>
          <input 
            type="text" 
            id="name" 
            placeholder="이름을 입력하세요"
            {...register('name', {
              required: '이름을 입력해주세요'
            })} 
          />
        </FormItem>
        
        <FormItem label="직무" errorMessage={errors.role?.message}>
          <select 
            id="role" 
            {...register('role', {
              required: '직무를 선택해주세요'
            })}
          >
            {ROLE_LIST.map((role) => (
              <option key={role.value} value={role.value}>{role.label}</option>
            ))}
          </select>
        </FormItem> 

        {/* 직무별 추가 정보 섹션 */}
        <SubTitle>추가정보 입력</SubTitle>
        
        {/* 개발자 전용 필드 */}
        {watchRole === 'developer' && (
          <>
            <FormItem label="사용 기술 스택" errorMessage={errors.techStack?.message}>
              <CheckboxGroup>
                {TECH_STACK_LIST.map((tech) => (
                  <CheckboxItem key={tech}>
                    <input 
                      type="checkbox" 
                      id={tech} 
                      value={tech} 
                      {...register('techStack', {
                        required: '최소 1개 이상의 기술 스택을 선택해주세요'
                      })} 
                    />
                    <label htmlFor={tech}>{tech}</label>
                  </CheckboxItem>
                ))}
              </CheckboxGroup>
            </FormItem>
            
            <FormItem label="GitHub 주소" errorMessage={errors.github?.message}>
              <input 
                type="text" 
                id="github" 
                placeholder="https://github.com/username"
                {...register('github', {
                  required: 'GitHub 주소를 입력해주세요',
                  pattern: {
                    value: /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/,
                    message: '올바른 GitHub 주소를 입력해주세요'
                  }
                })} 
              />
            </FormItem>
          </>
        )}

        {/* 디자이너 전용 필드 */}
        {watchRole === 'designer' && (
          <>
            <FormItem label="디자인 툴" errorMessage={errors.designTools?.message}>
              <CheckboxGroup>
                {DESIGN_TOOLS_LIST.map((tool) => (
                  <CheckboxItem key={tool}>
                    <input 
                      type="checkbox" 
                      id={tool} 
                      value={tool} 
                      {...register('designTools', {
                        required: '최소 1개 이상의 디자인 툴을 선택해주세요'
                      })} 
                    />
                    <label htmlFor={tool}>{tool}</label>
                  </CheckboxItem>
                ))}
              </CheckboxGroup>
            </FormItem>
            
            <FormItem label="디자인 포트폴리오 주소" errorMessage={errors.portfolio?.message}>
              <input 
                type="text" 
                id="portfolio" 
                placeholder="https://your-portfolio.com"
                {...register('portfolio', {
                  required: '디자인 포트폴리오 주소를 입력해주세요',
                  pattern: {
                    value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/,
                    message: '올바른 포트폴리오 주소를 입력해주세요'
                  }
                })} 
              />
            </FormItem>
          </>
        )}

        {/* 기획자 전용 필드 */}
        {watchRole === 'planner' && (
          <>
            <FormItem label="경험 연차" errorMessage={errors.experienceYear?.message}>
              <input 
                min={0} 
                type="number" 
                id="experienceYear" 
                placeholder="경험 연차를 입력하세요"
                {...register('experienceYear', {
                  required: '경험 연차를 입력해주세요',
                  min: {
                    value: 0,
                    message: '0 이상의 숫자를 입력해주세요'
                  }
                })} 
              />
            </FormItem>
            
            <FormItem label="주요 프로젝트 설명" errorMessage={errors.projectSummary?.message}>
              <textarea 
                id="projectSummary" 
                placeholder="주요 프로젝트 경험을 설명해주세요"
                rows={4}
                {...register('projectSummary', {
                  required: '주요 프로젝트 설명을 입력해주세요'
                })} 
              />
            </FormItem>
          </>
        )}

        <SubmitButton type="submit">등록하기</SubmitButton>
      </Form>
    </FormContainer>
  )
}

export default FormPage