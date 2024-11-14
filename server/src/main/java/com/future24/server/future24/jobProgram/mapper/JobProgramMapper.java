package com.future24.server.future24.jobProgram.mapper;

import com.future24.server.future24.jobProgram.vo.JobProgramVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface JobProgramMapper {

    @Select("SELECT * FROM job_program")
    List<JobProgramVO> findAll();
}
