import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAdminInfo, deleteInfoComment, deleteInfoPost } from '../APIs/adminAPI';

function AdminInfoboard(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getAdminInfo();
                if(response.status>= 200 && response < 300)
                    setPosts(response.data);
            } catch (error) {
                console.error('정보게시판 정보 불러오기 실패:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDeletePost = async (postKey) => {
        const confirmDelete = window.confirm('이 게시글을 삭제하시겠습니까?');
        if (confirmDelete) {
            try {
                await deleteInfoPost(postKey); 
                setPosts(posts.filter(post => post.key !== postKey));
                alert('게시글 삭제 성공');
            } catch (error) {
                alert('게시글 삭제 실패: ' + error.message);
            }
        }
    };

    const handleDeleteComment = async (freeboardKey, commentKey) => {
        const confirmDelete = window.confirm('이 댓글을 삭제하시겠습니까?');
        if (confirmDelete) {
            try {
                await deleteInfoComment(freeboardKey, commentKey); 
                setPosts(posts.map(post => ({
                    ...post,
                    FreeboardComments: post.FreeboardComments.filter(comment => comment.commentKey !== commentKey)
                })));
                alert('댓글 삭제 성공');
            } catch (error) {
                alert('댓글 삭제 실패: ' + error.message);
            }
        }
    };

    return (
        <Container>
            <Title>정보게시판</Title>
            {posts.map(post => (
                <PostContainer key={post.key}>
                    <PostHeader>
                        <PostTitle>{post.title}</PostTitle>
                        <DeleteButton onClick={() => handleDeletePost(post.key)}>삭제</DeleteButton>
                    </PostHeader>
                    <PostBody>{post.body}</PostBody>
                    <PostImg src={post.pic1}/>
                    <PostImg src={post.pic2}/>
                    <CommentsContainer>
                        {post.FreeboardComments.map(comment => (
                            <CommentContainer key={comment.commentKey}>
                                <CommentBody>{comment.comment}</CommentBody>
                                <DeleteButton onClick={() => handleDeleteComment(post.key, comment.commentKey)}>삭제</DeleteButton>
                            </CommentContainer>
                        ))}
                    </CommentsContainer>
                </PostContainer>
            ))}
        </Container>
    );
};

export default AdminInfoboard;

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
