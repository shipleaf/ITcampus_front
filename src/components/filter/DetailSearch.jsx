import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

const DetailSearch = ({ onFilterChange }) => {
  const [showJob, setShowJob] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showEmploymentType, setShowEmploymentType] = useState(false);

  const [activeCategory, setActiveCategory] = useState('');

  const [jobCheckboxes, setJobCheckboxes] = useState({});
  const [techStackCheckboxes, setTechStackCheckboxes] = useState({});
  const [experienceCheckboxes, setExperienceCheckboxes] = useState({});
  const [educationCheckboxes, setEducationCheckboxes] = useState({});
  const [employmentTypeCheckboxes, setEmploymentTypeCheckboxes] = useState({});

  const dropdownRef = useRef(null);

  const handleFilterChange = useCallback((type, selectedItems) => {
    onFilterChange(type, selectedItems);
  }, [onFilterChange]);

  useEffect(() => {
    handleFilterChange('job', Object.keys(jobCheckboxes).filter(key => jobCheckboxes[key]));
  }, [jobCheckboxes, handleFilterChange]);

  useEffect(() => {
    handleFilterChange('stack', Object.keys(techStackCheckboxes).filter(key => techStackCheckboxes[key]));
  }, [techStackCheckboxes, handleFilterChange]);

  useEffect(() => {
    handleFilterChange('experience', Object.keys(experienceCheckboxes).filter(key => experienceCheckboxes[key]));
  }, [experienceCheckboxes, handleFilterChange]);

  useEffect(() => {
    handleFilterChange('education', Object.keys(educationCheckboxes).filter(key => educationCheckboxes[key]));
  }, [educationCheckboxes, handleFilterChange]);

  useEffect(() => {
    handleFilterChange('employmentType', Object.keys(employmentTypeCheckboxes).filter(key => employmentTypeCheckboxes[key]));
  }, [employmentTypeCheckboxes, handleFilterChange]);

  const handleToggle = (type) => {
    if (activeCategory === type) {
      setActiveCategory('');
      setShowJob(false);
      setShowTechStack(false);
      setShowExperience(false);
      setShowEducation(false);
      setShowEmploymentType(false);
    } else {
      setActiveCategory(type);
      setShowJob(type === 'job');
      setShowTechStack(type === 'techStack');
      setShowExperience(type === 'experience');
      setShowEducation(type === 'education');
      setShowEmploymentType(type === 'employmentType');
    }
  };

  const handleCheckboxChange = (category, label) => {
    const updateCheckboxes = (checkboxes, setCheckboxes) => {
      const newCheckboxes = { ...checkboxes };
      const selectedCount = Object.values(newCheckboxes).filter(Boolean).length;

      if (newCheckboxes[label]) {
        newCheckboxes[label] = false;
      } else if (selectedCount < 3) {
        newCheckboxes[label] = true;
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
      }

      setCheckboxes(newCheckboxes);
    };

    switch (category) {
      case 'job':
        updateCheckboxes(jobCheckboxes, setJobCheckboxes);
        break;
      case 'techStack':
        updateCheckboxes(techStackCheckboxes, setTechStackCheckboxes);
        break;
      case 'experience':
        updateCheckboxes(experienceCheckboxes, setExperienceCheckboxes);
        break;
      case 'education':
        updateCheckboxes(educationCheckboxes, setEducationCheckboxes);
        break;
      case 'employmentType':
        updateCheckboxes(employmentTypeCheckboxes, setEmploymentTypeCheckboxes);
        break;
      default:
        break;
    }
  };

  const renderSelectedItems = (category, checkboxes, setCheckboxes) => {
    return Object.keys(checkboxes).filter(key => checkboxes[key]).map(label => (
      <SelectedItem key={`${category}/${label}`}>
        {`${category}/${label}`}
        <button onClick={() => setCheckboxes(prev => ({ ...prev, [label]: false }))}>X</button>
      </SelectedItem>
    ));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowJob(false);
      setShowTechStack(false);
      setShowExperience(false);
      setShowEducation(false);
      setShowEmploymentType(false);
      setActiveCategory('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DetailedSearchContainer ref={dropdownRef}>
      <Title>상세검색</Title>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleToggle('job')} $active={activeCategory === 'job'}>직무</Th>
            <Th onClick={() => handleToggle('techStack')} $active={activeCategory === 'techStack'}>기술스택</Th>
            <Th onClick={() => handleToggle('experience')} $active={activeCategory === 'experience'}>경력</Th>
            <Th onClick={() => handleToggle('education')} $active={activeCategory === 'education'}>학력</Th>
            <Th onClick={() => handleToggle('employmentType')} $active={activeCategory === 'employmentType'}>고용형태</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td $active={showJob}>
              {showJob && (
                <Overlay>
                  <CheckboxContainer>
                    {['프론트엔드', '백엔드/서버', '앱개발', '개발PM', '게임개발', '웹개발', '정보보안', '데이터 분석', 'QA/테스터', 'BI엔지니어', '퍼블리셔', 'SQA', '네트워크'].map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={jobCheckboxes[label] || false} onChange={() => handleCheckboxChange('job', label)} /> {label}
                      </label>
                    ))}
                  </CheckboxContainer>
                </Overlay>
              )}
            </Td>
            <Td $active={showTechStack}>
              {showTechStack && (
                <Overlay>
                  <CheckboxContainer>
                    {['풀스택', 'JS', 'JAVA', 'C언어', 'C++', 'C#', 'ASP', 'Android', 'Django', 'Docker', 'CSS', '.Net'].map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={techStackCheckboxes[label] || false} onChange={() => handleCheckboxChange('techStack', label)} /> {label}
                      </label>
                    ))}
                  </CheckboxContainer>
                </Overlay>
              )}
            </Td>
            <Td $active={showExperience}>
              {showExperience && (
                <Overlay>
                  <CheckboxContainer>
                    {['신입 가능', '1~3년', '4~6년', '데이터베이스'].map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={experienceCheckboxes[label] || false} onChange={() => handleCheckboxChange('experience', label)} /> {label}
                      </label>
                    ))}
                  </CheckboxContainer>
                </Overlay>
              )}
            </Td>
            <Td $active={showEducation}>
              {showEducation && (
                <Overlay>
                  <CheckboxContainer>
                    {['대학교졸업(2,3년)', '대학교졸업(4년)', '대학교재학', '학력무관'].map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={educationCheckboxes[label] || false} onChange={() => handleCheckboxChange('education', label)} /> {label}
                      </label>
                    ))}
                  </CheckboxContainer>
                </Overlay>
              )}
            </Td>
            <Td $active={showEmploymentType}>
              {showEmploymentType && (
                <Overlay>
                  <CheckboxContainer>
                    {['정규직', '계약직', '인턴', '파견직'].map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={employmentTypeCheckboxes[label] || false} onChange={() => handleCheckboxChange('employmentType', label)} /> {label}
                      </label>
                    ))}
                  </CheckboxContainer>
                </Overlay>
              )}
            </Td>
          </tr>
        </tbody>
      </Table>
      <SelectedContainer>
        {renderSelectedItems('직무', jobCheckboxes, setJobCheckboxes)}
        {renderSelectedItems('기술스택', techStackCheckboxes, setTechStackCheckboxes)}
        {renderSelectedItems('경력', experienceCheckboxes, setExperienceCheckboxes)}
        {renderSelectedItems('학력', educationCheckboxes, setEducationCheckboxes)}
        {renderSelectedItems('고용형태', employmentTypeCheckboxes, setEmploymentTypeCheckboxes)}
      </SelectedContainer>
    </DetailedSearchContainer>
  );
};

export default DetailSearch;

const DetailedSearchContainer = styled.div`
  width: 100%;
  margin: 20px auto;
`

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`

const Th = styled.th`
  background-color: ${(props) => (props.$active ? '#007FFF' : '#F3F9FF')};
  color: ${(props) => (props.$active ? 'white' : 'black')};
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 15px;
  width: 20%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$active ? '#007FFF' : '#E0E0E0')};
    color: ${(props) => (props.$active ? 'white' : 'black')};
  }
`

const Td = styled.td`
  padding: 10px;
  position: relative;
  vertical-align: top;
  ${({ $active }) => $active && `
    background-color: white;
  `}
`

const Overlay = styled.div`
  position: absolute;
  top: 100%;
  top: -1px;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid gray;
  z-index: 1;
  box-sizing: border-box;
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  label {
    margin-bottom: 10px; 
  }
  
  label:last-child {
    margin-bottom: 0;
  }
`

const SelectedContainer = styled.div`
  padding: 10px;
  border: none;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`

const SelectedItem = styled.div`
  background-color: #007FFF;
  font-size: 12px;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  & span{
    margin-left: 3px;
  }

  & button{
    border: none;
    background-color: inherit;
    color: #fff;
    margin: 0;
    padding: 0;
    margin-left: 3px;
    cursor: pointer;
  }
`
