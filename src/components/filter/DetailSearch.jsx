import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

const DetailSearch = ({ filterOptions, onFilterChange }) => {
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
    handleFilterChange('recruit_part', Object.keys(jobCheckboxes).filter(key => jobCheckboxes[key]));
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
    handleFilterChange('work_type', Object.keys(employmentTypeCheckboxes).filter(key => employmentTypeCheckboxes[key]));
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
      setShowJob(type === 'recruit_part');
      setShowTechStack(type === 'stack');
      setShowExperience(type === 'experience');
      setShowEducation(type === 'education');
      setShowEmploymentType(type === 'work_type');
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
      case 'recruit_part':
        updateCheckboxes(jobCheckboxes, setJobCheckboxes);
        break;
      case 'stack':
        updateCheckboxes(techStackCheckboxes, setTechStackCheckboxes);
        break;
      case 'experience':
        updateCheckboxes(experienceCheckboxes, setExperienceCheckboxes);
        break;
      case 'education':
        updateCheckboxes(educationCheckboxes, setEducationCheckboxes);
        break;
      case 'work_type':
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
            <Th onClick={() => handleToggle('recruit_part')} $active={activeCategory === 'recruit_part'}>직무</Th>
            <Th onClick={() => handleToggle('stack')} $active={activeCategory === 'stack'}>기술스택</Th>
            <Th onClick={() => handleToggle('experience')} $active={activeCategory === 'experience'}>경력</Th>
            <Th onClick={() => handleToggle('education')} $active={activeCategory === 'education'}>학력</Th>
            <Th onClick={() => handleToggle('work_type')} $active={activeCategory === 'work_type'}>고용형태</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td $active={showJob}>
              {showJob && (
                <Overlay>
                  <CheckboxContainer>
                    {filterOptions.recruit_part.map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={jobCheckboxes[label] || false} onChange={() => handleCheckboxChange('recruit_part', label)} /> {label}
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
                    {filterOptions.stack.map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={techStackCheckboxes[label] || false} onChange={() => handleCheckboxChange('stack', label)} /> {label}
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
                    {filterOptions.experience.map(label => (
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
                    {filterOptions.education.map(label => (
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
                    {filterOptions.work_type.map(label => (
                      <label key={label}>
                        <input type="checkbox" checked={employmentTypeCheckboxes[label] || false} onChange={() => handleCheckboxChange('work_type', label)} /> {label}
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
  max-height: 200px;
  overflow-y: auto; 

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
