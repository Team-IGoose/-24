package com.future24.server.future24.kStartUp.mapper;

import com.future24.server.future24.kStartUp.vo.KStartUpVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface KStartUpMapper {

    @Select("SELECT * FROM k_startup WHERE (local_name = #{startValue})")
    List<KStartUpVO> findBylocalName(String startValue);
}
