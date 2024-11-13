package com.future24.server.future24.jobSupport.mapper;


import com.future24.server.future24.jobSupport.vo.JobSupportVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface JobSupportMapper {

    @Select("SELECT * FROM support_job_program")
    List<JobSupportVO> findJobSupportVO();

}
