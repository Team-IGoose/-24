package com.future24.server.future24.schoolInfo.mapper;

import com.future24.server.future24.schoolInfo.vo.SchoolInfoVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SchoolInfoMapper {

    @Select("SELECT * FROM school_info")
    List<SchoolInfoVO> selectAllSchool();
}
