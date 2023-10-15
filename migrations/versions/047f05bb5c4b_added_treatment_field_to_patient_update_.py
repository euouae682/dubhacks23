"""added treatment field to patient_update. only one treatment string is allowed per update

Revision ID: 047f05bb5c4b
Revises: 8a66b4181852
Create Date: 2023-10-14 21:57:13.906413

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '047f05bb5c4b'
down_revision = '8a66b4181852'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('patient_update', schema=None) as batch_op:
        batch_op.add_column(sa.Column('treatment', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('patient_update', schema=None) as batch_op:
        batch_op.drop_column('treatment')

    # ### end Alembic commands ###