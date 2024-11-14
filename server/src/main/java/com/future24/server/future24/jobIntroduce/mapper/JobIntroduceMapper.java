package com.future24.server.future24.jobIntroduce.mapper;

import com.future24.server.future24.jobIntroduce.vo.JobIntroduceVO;
import com.future24.server.future24.jobSupport.vo.JobSupportVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.w3c.dom.Text;

import java.util.List;

@Mapper
public interface JobIntroduceMapper {


    @Select("""
        SELECT *
        FROM job_introduce
        WHERE
            (address LIKE #{startValue} || '%' OR load_address LIKE #{startValue} || '%')
            AND (address LIKE '%' || #{includeValue} || '%' OR load_address LIKE '%' || #{includeValue} || '%')
    """)
    List<JobIntroduceVO> findByAddress(
            String startValue,
            String includeValue
    );
}
