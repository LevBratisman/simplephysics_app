"""added like_count to post

Revision ID: c81cb8e4a3e3
Revises: 617d2a51e715
Create Date: 2024-09-26 16:03:53.052806

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c81cb8e4a3e3'
down_revision: Union[str, None] = '617d2a51e715'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('post', sa.Column('like_count', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('post', 'like_count')
    # ### end Alembic commands ###
