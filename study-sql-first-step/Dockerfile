FROM mysql:8.0.29

# mysql 한글 설정
COPY my.cnf /etc/mysql/conf.d/
# 오라클 리눅스 셸 한글 설정
RUN microdnf install glibc-langpack-ko
ENV LANG=ko_KR.UTF-8
ENV LC_ALL=ko_KR.UTF-8

# mysql 데이터베이스 초기화
COPY sample.sql /docker-entrypoint-initdb.d
