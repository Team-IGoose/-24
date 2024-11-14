package com.future24.server.future24.schoolInfo.service;

import com.future24.server.future24.schoolInfo.mapper.SchoolInfoMapper;
import com.future24.server.future24.schoolInfo.vo.SchoolInfoVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SchoolInfoService {

    private final SchoolInfoMapper schoolInfoMapper;

    public List<SchoolInfoVO> getSchoolInfo(){
        return schoolInfoMapper.selectAllSchool();
    }
}
