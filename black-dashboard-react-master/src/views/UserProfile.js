import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

function StudentRegistration() {
  const requiredFields = {
    personalInfo: ["firstName", "lastName", "dob", "gender", "nationality", "aadharNumber"],
    contactInfo: ["email", "phoneNumber", "permanentAddress"],
    // Define required fields for other sections similarly
  };
  
  const [activeAccordion, setActiveAccordion] = useState(null);
  const isSectionValid = (section) => {
    const sectionFields = studentInfo[section];
    const requiredFields = Object.keys(sectionFields).filter((field) => field !== "otherSkills");
    return requiredFields.every((field) => !!sectionFields[field]);
  };

  const [studentInfo, setStudentInfo] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      nationality: "",
      aadharNumber: "",
    },
    contactInfo: {
      email: "",
      phoneNumber: "",
      permanentAddress: "",
      currentAddress: "",
    },
    skills: {
      technical: [],
      nonTechnical: [],
      otherSkills: "",
    },
    academicInfo: {
      enrollmentYear: "",
      programName: "",
      studentID: "",
      department: "",
      semester: "",
      selectedBackgrounds: [],
      schoolNames: {},
      passingYears: {},
    },
    parentInfo: {
      parentName: "",
      relationship: "",
      parentPhone: "",
      parentEmail: "",
      parentAddress: "",
    },
    emergencyContact: {
      emergencyName: "",
      relationship: "",
      emergencyPhone: "",
    },
    additionalInfo: {
      medicalConditions: "",
      dietaryRestrictions: "",
      housingPreferences: "",
      extracurricularActivities: "",
    },
    agreedToTerms: false,
  });

  const toggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  const handleFieldChange = (e, section, field, isRequired = false) => {
    const { value } = e.target;
    setStudentInfo((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  
    if (isRequired && value.trim() === "") {
      // Handle required field validation after setting the value
      alert(`${field} is required`);
    }
  };
  

  const handleNestedFieldChange = (e, category, nestedCategory, key) => {
    const { value } = e.target;
    setStudentInfo((prevInfo) => ({
      ...prevInfo,
      [category]: {
        ...prevInfo[category],
        [nestedCategory]: {
          ...prevInfo[category][nestedCategory],
          [key]: value,
        },
      },
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setStudentInfo((prevState) => ({
      ...prevState,
      agreedToTerms: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", studentInfo);
  };
  

  return (
    <div className="content">
      <Row>
        <Col md="8" style={{ minWidth: "100%" }}>
          <Card>
            <CardHeader>
              <h5 className="title">Student Registration</h5>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <Button color="link" onClick={() => toggleAccordion("personal-info")}>
                  Personal Information
                </Button>
                <Collapse isOpen={activeAccordion === "personal-info"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>First Name (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.personalInfo.firstName}
                          onChange={(e) => handleFieldChange(e, "personalInfo", "firstName", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Last Name (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.personalInfo.lastName}
                          onChange={(e) => handleFieldChange(e, "personalInfo", "lastName", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Date of Birth (Required)</Label>
                        <Input
                          type="date"
                          value={studentInfo.personalInfo.dob}
                          onChange={(e) => handleFieldChange(e, "personalInfo", "dob", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Gender (Required)</Label>
                        <Input
                          type="select"
                          value={studentInfo.personalInfo.gender}
                          onChange={(e) => handleFieldChange(e, "personalInfo", "gender", true)}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Nationality (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.personalInfo.nationality}
                          onChange={(e) => handleFieldChange(e, "personalInfo", "nationality", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Aadhar Number (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.personalInfo.aadharNumber}
                          onChange={(e) => handleFieldChange(e, "personalInfo", "aadharNumber", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>

                {/* Contact Information */}
                <Button color="link" onClick={() => toggleAccordion("contact-info")}>
                  Contact Information
                </Button>
                <Collapse isOpen={activeAccordion === "contact-info"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Email Address (Required)</Label>
                        <Input
                          type="email"
                          value={studentInfo.contactInfo.email}
                          onChange={(e) => handleFieldChange(e, "contactInfo", "email", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone Number (Required)</Label>
                        <Input
                          type="tel"
                          value={studentInfo.contactInfo.phoneNumber}
                          onChange={(e) => handleFieldChange(e, "contactInfo", "phoneNumber", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Permanent Address (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.contactInfo.permanentAddress}
                          onChange={(e) => handleFieldChange(e, "contactInfo", "permanentAddress", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Current Address (if different)</Label>
                        <Input
                          type="text"
                          value={studentInfo.contactInfo.currentAddress}
                          onChange={(e) => handleFieldChange(e, "contactInfo", "currentAddress")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>

                {/* Academic Information */}
                <Button color="link" onClick={() => toggleAccordion("academic-info")}>
                  Academic Information
                </Button>
                <Collapse isOpen={activeAccordion === "academic-info"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Enrollment Year</Label>
                        <Input
                          type="text"
                          value={studentInfo.academicInfo.enrollmentYear}
                          onChange={(e) => handleFieldChange(e, "academicInfo", "enrollmentYear")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Course/Program Name (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.academicInfo.programName}
                          onChange={(e) => handleFieldChange(e, "academicInfo", "programName", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Student ID/Registration Number (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.academicInfo.studentID}
                          onChange={(e) => handleFieldChange(e, "academicInfo", "studentID", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Department</Label>
                        <Input
                          type="text"
                          value={studentInfo.academicInfo.department}
                          onChange={(e) => handleFieldChange(e, "academicInfo", "department")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Semester/Year</Label>
                        <Input
                          type="text"
                          value={studentInfo.academicInfo.semester}
                          onChange={(e) => handleFieldChange(e, "academicInfo", "semester")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Previous Educational Background (e.g., High School, College)</Label>
                        <Input
                          type="select"
                          value={studentInfo.academicInfo.selectedBackground}
                          onChange={(e) => handleFieldChange(e, "academicInfo", "selectedBackground")}
                        >
                          <option value="">Select...</option>
                          <option value="High School">High School</option>
                          <option value="College">College</option>
                          <option value="Diploma">Diploma</option>
                          <option value="ITI">ITI</option>
                          <option value="UG">UG</option>
                          <option value="PG">PG</option>
                          <option value="PhD">PhD</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  {studentInfo.academicInfo.selectedBackgrounds && (
                    <div>
                      {studentInfo.academicInfo.selectedBackgrounds.map((selectedBackground) => (
                        <Row key={selectedBackground}>
                          <Col md="6">
                            <FormGroup>
                              <Label>School Name for {selectedBackground}</Label>
                              <Input
                                type="text"
                                value={studentInfo.academicInfo.schoolNames[selectedBackground]}
                                onChange={(e) =>
                                  handleNestedFieldChange(
                                    e,
                                    "academicInfo",
                                    "schoolNames",
                                    selectedBackground
                                  )
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label>Passing Year for {selectedBackground}</Label>
                              <Input
                                type="text"
                                value={studentInfo.academicInfo.passingYears[selectedBackground]}
                                onChange={(e) =>
                                  handleNestedFieldChange(
                                    e,
                                    "academicInfo",
                                    "passingYears",
                                    selectedBackground
                                  )
                                }
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      ))}
                    </div>
                  )}
                </Collapse>

                {/* Parent/Guardian Information */}
                <Button color="link" onClick={() => toggleAccordion("parent-info")}>
                  Parent/Guardian Information
                </Button>
                <Collapse isOpen={activeAccordion === "parent-info"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Parent/Guardian's Name (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.parentInfo.parentName}
                          onChange={(e) => handleFieldChange(e, "parentInfo", "parentName", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Relationship to Student (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.parentInfo.relationship}
                          onChange={(e) => handleFieldChange(e, "parentInfo", "relationship", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone Number (Required)</Label>
                        <Input
                          type="tel"
                          value={studentInfo.parentInfo.parentPhone}
                          onChange={(e) => handleFieldChange(e, "parentInfo", "parentPhone", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          value={studentInfo.parentInfo.parentEmail}
                          onChange={(e) => handleFieldChange(e, "parentInfo", "parentEmail")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Address</Label>
                        <Input
                          type="text"
                          value={studentInfo.parentInfo.parentAddress}
                          onChange={(e) => handleFieldChange(e, "parentInfo", "parentAddress")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>

                {/* Emergency Contact */}
                <Button color="link" onClick={() => toggleAccordion("emergency-contact")}>
                  Emergency Contact
                </Button>
                <Collapse isOpen={activeAccordion === "emergency-contact"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Name (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.emergencyContact.emergencyName}
                          onChange={(e) => handleFieldChange(e, "emergencyContact", "emergencyName", true)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Relationship (Required)</Label>
                        <Input
                          type="text"
                          value={studentInfo.emergencyContact.relationship}
                          onChange={(e) => handleFieldChange(e, "emergencyContact", "relationship", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone Number (Required)</Label>
                        <Input
                          type="tel"
                          value={studentInfo.emergencyContact.emergencyPhone}
                          onChange={(e) => handleFieldChange(e, "emergencyContact", "emergencyPhone", true)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>

                {/* Additional Information */}
                <Button color="link" onClick={() => toggleAccordion("additional-info")}>
                  Additional Information
                </Button>
                <Collapse isOpen={activeAccordion === "additional-info"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Medical Conditions or Allergies</Label>
                        <Input
                          type="text"
                          value={studentInfo.additionalInfo.medicalConditions}
                          onChange={(e) => handleFieldChange(e, "additionalInfo", "medicalConditions")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Dietary Restrictions</Label>
                        <Input
                          type="text"
                          value={studentInfo.additionalInfo.dietaryRestrictions}
                          onChange={(e) => handleFieldChange(e, "additionalInfo", "dietaryRestrictions")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Housing Preferences (if applicable)</Label>
                        <Input
                          type="text"
                          value={studentInfo.additionalInfo.housingPreferences}
                          onChange={(e) => handleFieldChange(e, "additionalInfo", "housingPreferences")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Extracurricular Activities or Interests</Label>
                        <Input
                          type="text"
                          value={studentInfo.additionalInfo.extracurricularActivities}
                          onChange={(e) => handleFieldChange(e, "additionalInfo", "extracurricularActivities")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>
                <Button color="link" onClick={() => toggleAccordion("skills")}>
                  Skills
                </Button>
                <Collapse isOpen={activeAccordion === "skills"}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Technical Skills</Label>
                        {[
                          "Skill A",
                          "Skill B",
                          "Skill C",
                          // Add more technical skills as needed
                        ].map((skill) => (
                          <FormGroup check key={skill}>
                            <Label check>
                              <Input
                                type="checkbox"
                                checked={studentInfo.skills.technical.includes(skill)}
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  setStudentInfo((prevState) => ({
                                    ...prevState,
                                    skills: {
                                      ...prevState.skills,
                                      technical: isChecked
                                        ? [...prevState.skills.technical, skill]
                                        : prevState.skills.technical.filter(
                                            (s) => s !== skill
                                          ),
                                    },
                                  }));
                                }}
                              />
                              {skill}
                            </Label>
                          </FormGroup>
                        ))},
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Non-Technical Skills</Label>
                        {[
                          "Skill X",
                          "Skill Y",
                          "Skill Z",
                          // Add more non-technical skills as needed
                        ].map((skill) => (
                          <FormGroup check key={skill}>
                            <Label check>
                              <Input
                                type="checkbox"
                                checked={studentInfo.skills.nonTechnical.includes(skill)}
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  setStudentInfo((prevState) => ({
                                    ...prevState,
                                    skills: {
                                      ...prevState.skills,
                                      nonTechnical: isChecked
                                        ? [...prevState.skills.nonTechnical, skill]
                                        : prevState.skills.nonTechnical.filter(
                                            (s) => s !== skill
                                          ),
                                    },
                                  }));
                                }}
                              />
                              {skill}
                            </Label>
                          </FormGroup>
                        ))},
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Other Skills (if any)</Label>
                        <Input
                          type="textarea"
                          value={studentInfo.skills.otherSkills}
                          onChange={(e) => handleFieldChange(e, "skills", "otherSkills")}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>


                <Button color="primary" type="submit">
                  Save
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default StudentRegistration;
