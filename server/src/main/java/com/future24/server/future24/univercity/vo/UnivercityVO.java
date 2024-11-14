package com.future24.server.future24.univercity.vo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UnivercityVO {
    private String university;         // 대학명
    private String college;            // 단과대학명
    private String department;         // 학과명

    // 강의 정보
    private String major;              // 전공명
    private String className;          // 강의명
    private int grade;                 // 학년
    private String term;               // 학기
    private double credit;             // 학점
    private double theoryTime;         // 이론 시간
    private double practiceTime;       // 실습 시간
    private String subjectType;        // 과목 유형

    // 강의 설명 및 목표
    private String classDescription;   // 강의 설명
    private String objective;          // 강의 목표

    // 교재 정보
    private String mainTextbook;       // 주교재
    private String subTextbook;        // 부교재
    private String references;
}
