package com.future24.server.future24.schoolInfo.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SchoolInfoVO {

    private String school_code;
    private String school_name;
    private String school_rating_code;
    private String is_public;
    private String gym;
    private String hall;
    private String dormitory;
    private String pool;
    private String career_counseling;
    private String type;
}
