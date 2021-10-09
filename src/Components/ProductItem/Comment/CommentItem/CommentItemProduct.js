/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Comment, Tooltip } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import ActionItem from './ActionItem';
import moment from 'moment';

function CommentItemProduct(props) {
    const { itemParent } = props;
    const [showCmt, setShowCmt] = useState(null);
    const [statusHeight, setStatusHeight] = useState(false);

    const handleCommentsList = (key) => {
        setShowCmt(key);
        setStatusHeight(!statusHeight);
    };

    return (
        <>
            {itemParent.cmt_item.length ? (
                <Button
                    type="link"
                    icon={
                        statusHeight ? (
                            <CaretUpOutlined />
                        ) : (
                            <CaretDownOutlined />
                        )
                    }
                    onClick={handleCommentsList}
                >
                    {!statusHeight ? 'Xem' : 'Ẩn'} {itemParent.cmt_item.length}{' '}
                    câu trả lời
                </Button>
            ) : (
                ''
            )}
            {itemParent.cmt_item.length
                ? itemParent.cmt_item.map((itemCmt, i) => (
                      <div
                          className="list-comment-item"
                          key={i}
                          style={{
                              height: statusHeight ? 'auto' : '0px',
                          }}
                      >
                          <Comment
                              author={<a>{itemCmt.author}</a>}
                              avatar={
                                  <Avatar
                                      src={itemCmt.avatar}
                                      alt={itemCmt.author}
                                  />
                              }
                              content={itemCmt.content}
                              datetime={
                                  itemCmt.date ? (
                                      <Tooltip title={itemCmt.date}>
                                          <span>{itemCmt.datetime}</span>
                                      </Tooltip>
                                  ) : (
                                      <Tooltip
                                          title={moment().format(
                                              'YYYY-MM-DD HH:mm:ss',
                                          )}
                                      >
                                          <span>{itemCmt.datetime}</span>
                                      </Tooltip>
                                  )
                              }
                          >
                              <div
                                  className="comment-actions"
                                  style={{
                                      display: 'flex',
                                      justifyContent: 'flex-start',
                                      alignItems: 'baseline',
                                      transform: 'translateY(-10px)',
                                  }}
                              >
                                  <ActionItem item={itemCmt} />
                              </div>
                          </Comment>
                      </div>
                  ))
                : ''}
        </>
    );
}

CommentItemProduct.propTypes = {};

export default CommentItemProduct;
