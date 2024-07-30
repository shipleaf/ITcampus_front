import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAdminStudy, deleteStudyPost, deleteStudyComment } from '../APIs/adminAPI';

function AdminStudyboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getAdminStudy();
                setPosts(response.data);
            } catch (error) {
                console.error('스터디게시판 정보 불러오기 실패:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDeletePost = async (postKey) => {
        const confirmDelete = window.confirm('이 게시글을 삭제하시겠습니까?');
        if (confirmDelete) {
            try {
                await deleteStudyPost(postKey);
                setPosts(posts.filter(post => post.key !== postKey));
                alert('게시글 삭제 성공');
            } catch (error) {
                alert('게시글 삭제 실패: ' + error.message);
            }
        }
    };

    const handleDeleteComment = async (studyboardKey, commentKey) => {
        const confirmDelete = window.confirm('이 댓글을 삭제하시겠습니까?');
        if (confirmDelete) {
            try {
                await deleteStudyComment(studyboardKey, commentKey);
                setPosts(posts.map(post => ({
                    ...post,
                    StudyboardComments: post.StudyboardComments.filter(comment => comment.commentKey !== commentKey)
                })));
                alert('댓글 삭제 성공');
            } catch (error) {
                alert('댓글 삭제 실패: ' + error.message);
            }
        }
    };

    return (
        <Container>
            <Title>스터디 게시판</Title>
            {posts.map(post => (
                <PostContainer key={post.key}>
                    <PostHeader>
                        <PostTitle>{post.title}</PostTitle>
                        <Writer>{post.id}</Writer>
                        <DeleteButton onClick={() => handleDeletePost(post.key)}>삭제</DeleteButton>
                    </PostHeader>
                    <PostBody>{post.body}</PostBody>
                    <PostImg src={post.pic1}/>
                    <PostImg src={post.pic2}/>
                    <CommentsContainer>
                        {post.StudyboardComments.map(comment => (
                            <CommentContainer key={comment.commentKey}>
                                <CommentBody>{comment.comment}</CommentBody>
                                <Writer>{comment.id}</Writer>
                                {comment.isSecret && <SecretLabel>비밀글</SecretLabel>}
                                <DeleteButton onClick={() => handleDeleteComment(post.key, comment.commentKey)}>삭제</DeleteButton>
                            </CommentContainer>
                        ))}
                    </CommentsContainer>
                </PostContainer>
            ))}
        </Container>
    );
};

export default AdminStudyboard;

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`

const Title = styled.h1`
    text-align: center;
`

const PostContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 10px;
`

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PostTitle = styled.h2`
    margin: 0;
`

const Writer = styled.div`
    color: #999;
    font-size: 13px;
`

const DeleteButton = styled.button`
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #ff1a1a;
    }
`

const PostBody = styled.p`
    margin: 10px 0;
`

const CommentsContainer = styled.div`
    margin-top: 10px;
`

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    padding: 10px 0;
`

const CommentBody = styled.p`
    margin: 0;
`

const PostImg = styled.img`
    display: flex;
    width: 100px;
    height: 100px;
    object-fit: cover;
`

const SecretLabel = styled.span`
    color: red;
    font-weight: bold;
    margin-left: 10px;
`